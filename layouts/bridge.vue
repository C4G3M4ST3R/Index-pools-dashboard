<template>
  <div style="overflow: hidden">
    <Nuxt />
  </div>
</template>

<script>
import Vue from 'vue';
import mixins from '../mixins/global.js';
Vue.mixin(mixins);

export default {};
</script>

<style scoped>
html body {
  background-image: linear-gradient(135deg, #7c0808 10%, #eb1d4d 100%);
}
</style>
