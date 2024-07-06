<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <!-- <nav>
    <RouterLink to="/">Input Ingredient</RouterLink>
    <RouterLink to="/cetak">Cetak Tagihan</RouterLink>
  </nav> -->
  <RouterView />
</template>

