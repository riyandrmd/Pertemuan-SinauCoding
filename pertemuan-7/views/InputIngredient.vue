<script setup>
import { reactive, ref } from "vue";

const ingredient = ref([]);

const temp = reactive({
  customer: "",
  ingredient: "",
  amount: 0,
  price: 0,
});

const addIngredient = () => {
  ingredient.value.push({ ...temp });
  temp.customer = "";
  temp.ingredient = "";
  temp.amount = 0;
  temp.price = 0;

  console.log(ingredient.value);
};

const deleteIngredient = (index) => {
  ingredient.value.splice(index, 1);
};
</script>

<template>
  <h1>List Ingredient</h1>
  <label for="customer">
    Customer
    <input type="text" id="customer" v-model="temp.customer" /> <br />
  </label>
  <span>
    <label for="ingredient">
      Ingredient :
      <input type="text" id="ingredient" v-model="temp.ingredient" />
    </label>
    <label for="amount">
      Amount :
      <input type="number" id="amount" v-model="temp.amount" />
    </label>
    <label for="price">
      Price :
      <input type="number" id="price" v-model="temp.price" />
    </label>
    <button type="submit" @click="addIngredient()">Submit</button>
  </span>
  <table>
    <thead>
      <tr>
        <th>No</th>
        <th>Ingredient</th>
        <th>Price</th>
        <th>Amount</th>
        <th>Total</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(data, index) in ingredient" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ data.ingredient }}</td>
        <td>{{ data.price }}</td>
        <td>{{ data.amount }}</td>
        <td>{{ data.amount * data.price }}</td>
        <td>
          <button type="button" @click="deleteIngredient(index)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  margin-top: 10px;
  border: 1px solid #dddddd;
  width: 100%;
}

th,
td {
  padding: 5px 15px;
  border: 1px solid #dddddd;
}
</style>

