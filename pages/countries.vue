<template>
  <section>
    <p>Debug:</p>
    <p>{{ code }}</p>
    <div style="display: flex; align-items: center">
      <input type="text" v-model.trim="code" placeholder="search code">
      <div v-if="fetching">fetching...</div>
    </div>
    <div v-if="data">
      <table v-if="data.countries.length">
        <thead>
          <tr>
            <th style="width: 2em; white-space: nowrap">Flag</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="c in data.countries" :key="c.code">
            <td>{{ c.emoji }}</td>
            <td>{{ c.name }}</td>
          </tr>
        </tbody>
      </table>
      <div v-else><em>no results</em></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useExampleStore } from "@/stores/exampleStore";



const exampleStore = useExampleStore();
const { code, data, fetching} = storeToRefs(exampleStore);



/*
import {useNuxtApp} from "#app";

const app = useNuxtApp()

const { data } = await app.$urql.query(AllCountriesDocument).toPromise()
*/

/*
const data = await useAsyncData('countriesg', ctx => {
  return ctx.$urql.query(AllCountriesDocument).toPromise()
})
*/
</script>
