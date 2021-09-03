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
