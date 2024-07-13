<script setup>
import { useCartStore } from "../store/cartStore.js";
import { storeToRefs } from "pinia";
const store = useCartStore();

const props = defineProps({
  isCartPage: {
    type: Boolean,
    default: true,
  },
});

const { product, cartItem } = storeToRefs(store);
const { addCartItem } = store;
let itemShow = props.isCartPage ? product.value : cartItem.value;
let buttonText = props.isCartPage ? "Add" : "Remove";
</script>


<template>
  <div class="d-flex gap-3 flex-wrap">
    <div class="card" v-for="data in itemShow" :key="data.id">
      <p>{{ data.id }}. {{ data.title }}</p>
      <button @click="addCartItem">{{ buttonText }}</button>
    </div>
  </div>
</template>

<style scoped>
.card {
  padding: 20px;
  width: 16vw;
  background: #ffe057;
}
</style>