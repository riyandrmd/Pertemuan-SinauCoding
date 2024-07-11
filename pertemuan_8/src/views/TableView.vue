<script setup>
import { reactive } from "vue";
import TableComponent from "../components/TableComponent.vue";
import Header from "../json/Header.json";
import User from "../json/User.json";

const tableData = reactive({
  header: Header,
  data: User,
});

const hanldeShowData = (data) => {
  alert(
    `Nama ${data.nama}, Posisi ${data.position}, No Telp. ${data.no_telp} , Email ${data.email} `
  );
};
</script>

<template>
  <div>
    <h3>Table View</h3>
    <TableComponent :dataTable="tableData" @showData="hanldeShowData" />
  </div>
</template>