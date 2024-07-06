<script setup>
import { reactive, ref, computed } from "vue";
import { useRouter } from "vue-router";

const ingredient = ref([]);
const temp = reactive({
  ingredient: "",
  amount: 0,
  price: 0,
});

const customer = ref("");

const addIngredient = () => {
  temp.price = parseFloat(temp.price).toFixed(2);
  ingredient.value.push({ ...temp });
  temp.customer = "";
  temp.ingredient = "";
  temp.amount = 0;
  temp.price = 0;

  //console.log(ingredient.value);
};

const deleteIngredient = (index) => {
  ingredient.value.splice(index, 1);
};

const totalPrice = computed(() => {
  return ingredient.value.reduce((sum, item) => {
    return parseFloat(sum + item.amount * item.price).toFixed(2)
    //return sum + item.amount * item.price;
  }, 0);
});

const totalAmount = computed(() => {
  return ingredient.value.reduce((sum, data) => {
    return sum + data.amount;
  }, 0);
});

const router = useRouter();

const goToPayment = () => {
  if (totalAmount.value === 0) {
    alert("Tidak ada pesanan yang bisa dicetak");
  } else if (customer.value === "") {
    alert("Mohon isikan nama Customer");
  } else {
    router.push({
      path: "/payment",
      query: {
        totalAmount: totalAmount.value,
        totalPrice: totalPrice.value,
        customer: customer.value,
      },
    });
  }
  // console.log(totalAmount.value, " ", totalPrice.value, " ", customer.value);
};
</script>

<template>
  <h1>List Ingredient</h1>
  <label for="customer">
    Customer
    <input type="text" id="customer" v-model="customer" /> <br />
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
        <td>Rp. {{ data.price }}</td>
        <td>{{ data.amount }}</td>
        <td>Rp. {{ parseFloat(data.amount * data.price).toFixed(2) }}</td>
        <td>
          <button type="button" @click="deleteIngredient(index)">Delete</button>
        </td>
      </tr>
      <tr>
        <td colspan="3">Total</td>
        <td>{{ totalAmount }}</td>
        <td>Rp. {{ totalPrice }}</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <p>Total Data : {{ ingredient.length }}</p>
  <button type="button" @click="goToPayment()">Cetak Tagihan</button>
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

