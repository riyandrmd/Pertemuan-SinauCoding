<script setup>
defineProps({
  dataTable: {
    type: Object,
    default: {},
  },
});
</script>

<template>
  <table>
    <thead>
      <tr>
        <th v-for="(data, index) in dataTable.header" :key="index">
          {{ data }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="data in dataTable.data" :key="data.id">
        <td>{{ data.id }}</td>
        <td>{{ data.nama }}</td>
        <td>{{ data.position }}</td>
        <td>{{ data.no_telp }}</td>
        <td>{{ data.email }}</td>
        <td><Button type="Submit">Submit</Button></td>
      </tr>
    </tbody>
  </table>
</template>