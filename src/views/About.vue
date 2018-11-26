<template>
  <div class="content">
    <h1>О нас</h1>
    <div class="ui grid">
      <div class="computer tablet only row">
        <div class="column">
          <img class="ui medium right floated image" :src="photo" />
          <p v-for="(paragraph, index) in paragraphs" :key="index">
            {{ paragraph }}
          </p>
        </div>
      </div>
      <div class="mobile only row">
        <div class="column">
          <img
            class="ui centered image"
            :src="photo"
            style="padding-bottom: 0.5rem;"
          />
          <p v-for="(paragraph, index) in paragraphs" :key="index">
            {{ paragraph }}
          </p>
        </div>
      </div>
    </div>
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
