<template>
  <div class="content">
    <h1>Товары</h1>
    <div class="ui divided items">
      <div
        class="item"
        v-for="product in products"
        :key="product.name"
      >
        <div class="image" style="width: 7rem; height: 7rem;">
          <img :src="product.image">
        </div>
        <div class="content">
          <div class="header">{{ product.name }}</div>
          <div class="meta">
            <span class="price">{{ product.price }} руб.</span>
          </div>
          <div class="description">
            <p>{{ product.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'productsPage',
  data () {
    return {
      products: null
    }
  },
  beforeRouteEnter (to, from, next) {
    function getproducts () {
      return axios.get('/static/content/products.json')
    }

    getproducts().then(response => {
      next(vm =>
        vm.setproducts(response.data.products)
      )
    })
  },
  beforeRouteUpdate (to, from, next) {
    function getproducts () {
      return axios.get('/static/content/about.json')
    }

    getproducts().then(response => {
      next(vm =>
        vm.setproducts(response.data.products)
      )
    })
  },
  methods: {
    setproducts (products) {
      this.products = products
    }
  }
}
</script>
