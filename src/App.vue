<template>
  <div id="app">
    <Index />
  </div>
</template>

<script>
import Index from "./pages/index.vue";

export default {
  name: "app",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: { Index },
  created() {},
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
