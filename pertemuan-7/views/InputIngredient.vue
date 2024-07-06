<script setup>
import { reactive, ref } from "vue"
</script>

<template>
  <h1>List Ingredient</h1>
  <label for="costumer">
    Costumer
    <input type="text" id="costumer" /> <br />
  </label>
  <span>
    <label for="ingredient">
      Ingredient :
      <input type="text" id="ingredient" />
    </label>
    <label for="amount">
      Amount :
      <input type="number" id="amount" />
    </label>
    <label for="price">
      Price :
      <input type="number" id="price" />
    </label>
    <button type="submit">Submit</button>
  </span>
  <table></table>
</template>

