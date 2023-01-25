import { createPinia } from "pinia";
import { defineNuxtPlugin } from "#app";
import { useExampleStore } from "@/stores/exampleStore";

export default defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();
  nuxtApp.vueApp.use(pinia);

  nuxtApp.hook("vue:setup", () => {
    const exampleStore = useExampleStore();
    nuxtApp.exampleStore = exampleStore;
  });
});
