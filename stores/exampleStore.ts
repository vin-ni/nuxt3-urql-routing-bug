import { defineStore } from "pinia";
import type { Ref } from "vue";
import { AllCountriesDocument } from "~/gql/queries/all-countries";
import { useClientHandle } from "@urql/vue";

export const useExampleStore = defineStore("example", () => {
  const uuid: Ref<string> = ref("");

  const code = ref("");

  const variables = computed(() => {
    return code.value ? {filter: {code: {eq: code.value.toUpperCase()}}} : {}
  })
  
  const urql = useClientHandle();
  
  const { data, fetching } = urql.useQuery({query: AllCountriesDocument, variables})
  

  return {
    uuid,
    code,
    data,
    fetching
  };
});
