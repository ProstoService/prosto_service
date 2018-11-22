<template>
  <div class="content">
    <h1>О нас</h1>
    <img :src="photo" align="right" style="width: 20rem; margin-left: 1rem;" />
    <p v-for="(paragraph, index) in paragraphs" :key="index">{{ paragraph }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AboutPage",
  data() {
    return {
      photo: "",
      paragraphs: []
    };
  },
  // eslint-disable-next-line no-unused-vars
  beforeRouteEnter(to, from, next) {
    axios
      .get("./static/content/about.json")
      .then(response => {
        next(vm => vm.setData(response.data));
      })
      .catch(error => {
        console.log(error);
        next("/404");
      });
  },
  // eslint-disable-next-line no-unused-vars
  beforeRouteUpdate(to, from, next) {
    axios
      .get("./static/content/about.json")
      .then(response => {
        next(vm => vm.setData(response.data));
      })
      .catch(error => {
        console.log(error);
        next("/404");
      });
  },
  methods: {
    setData(data) {
      this.photo = data.photo;
      this.paragraphs = data.paragraphs;
    }
  }
};
</script>
