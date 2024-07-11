<script setup>
import { reactive } from "vue";
import TableComponent from "../components/TableComponent.vue";
import Header from "../json/Header.json";
import User from "../json/User.json";

const tableData = reactive({
  header: Header,
  data: User,
});

</script>

<template>
  <div>
    <h3>Table View</h3>
    <TableComponent :dataTable="tableData" />
  </div>
</template>