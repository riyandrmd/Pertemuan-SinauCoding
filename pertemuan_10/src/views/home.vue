<script>
import axios from "axios";
import { reactive, onMounted } from "vue";

export default {
  setup() {
    const dataAuthor = reactive([]);
    const dataPost = reactive([]);

    const getDataAuthor = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      dataAuthor.push(...res.data.slice(0, 5));
      // console.log(dataAuthor);
    };

    const getPostData = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      dataPost.push(...res.data.slice(0, 4));
      console.log(dataPost);
    };

    onMounted(() => {
      getDataAuthor();
      getPostData();
    });

    return { dataAuthor, dataPost };
  },
};
</script>
<template>
  <div>
    <h2>Post</h2>
    <div class="flex">
      <div class="card post" v-for="item in dataPost" :key="item.index">
        <h3>{{ item.title }}</h3>
        <p>{{ item.body }}</p>
      </div>
    </div>
    <h2>Author</h2>
    <div class="flex">
      <div class="card" v-for="item in dataAuthor" :key="item.index">
        <h3>{{ item.name }}</h3>
        <p>{{ item.username }}</p>
        <p>{{ item.email }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: space-between;
}

.post{
  width: 100%;
}
</style>