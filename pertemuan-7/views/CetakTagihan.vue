<script setup>
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const router = useRouter();
const totalAmount = route.query.totalAmount;
const totalPrice = route.query.totalPrice;
const namaCustomer = route.query.customer;

console.log(route.query.totalPrice);
</script>

<template>
  <div>
    <h1>Payment</h1>
    <p>
      Total pembayaran yang harus dibayarkan {{ namaCustomer }} dari
      {{ totalAmount }} items sebesar <br />
      Rp. {{ totalPrice }}
    </p>
    <button type="button" @click="router.back()">Back</button>
  </div>
</template>

<style scoped>
div {
  border: 1px solid #dddddd;
  border-radius: 5px;
  padding: 10px;
}
</style>