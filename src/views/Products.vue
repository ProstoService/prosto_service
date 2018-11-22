<template>
  <div class="content">
    <h1>Товары</h1>
    <div class="ui divided items">
      <div class="item" v-for="(product, index) in products" :key="index">
        <div class="image" style="width: 7rem; height: 7rem;">
          <img :src="product.image" />
        </div>
        <div class="content">
          <div class="header">{{ product.name }}</div>
          <div class="meta" v-if="product.meta">{{ product.meta }}</div>
          <div class="description">
            <p>{{ product.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "productsPage",
  data() {
    return {
      products: null
    };
  },
  // eslint-disable-next-line no-unused-vars
  beforeRouteEnter(to, from, next) {
    axios
      .get("/static/content/products.json")
      .then(response => {
        next(vm => vm.setProducts(response.data.products));
      })
      .catch(error => {
        next(error);
      });
  },
  // eslint-disable-next-line no-unused-vars
  beforeRouteUpdate(to, from, next) {
    axios
      .get("/static/content/products.json")
      .then(response => {
        next(vm => vm.setProducts(response.data.products));
      })
      .catch(error => {
        next(error);
      });
  },
  methods: {
    setProducts(products) {
      this.products = products;
    }
  }
};
</script>
