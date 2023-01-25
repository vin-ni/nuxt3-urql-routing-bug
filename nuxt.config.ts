import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  css: ["water.css/out/light.css"],
  modules: ["@pinia/nuxt"],
  build: {
    transpile: ["@urql/vue"]
  },
  telemetry: false
});
