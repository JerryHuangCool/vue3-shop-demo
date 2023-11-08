<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import homeProduct from './components/HomeProduct.vue'
</script>
<template>
  <div class="container">
    <home-category></home-category>
    <home-banner></home-banner>
  </div>
  <home-new></home-new>
  <home-hot></home-hot>
  <home-product></home-product>
</template>
