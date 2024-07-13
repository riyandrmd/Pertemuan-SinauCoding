<script setup>
import CardComponent from "../components/CardComponent.vue";
import { useCartStore } from "../store/cartStore.js";
import { storeToRefs } from "pinia";

const store = useCartStore();
const { count, product } = storeToRefs(store);
console.log(product);
</script>

<template>
  <div>
    <h3>This Cart Page</h3>
    <p>Item for Sale</p>
    <p>Total Item : {{ count }}</p>
    
    <CardComponent :isCartPage="true" />
  </div>
</template>