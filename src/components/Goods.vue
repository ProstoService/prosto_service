<template>
  <div>
    <h1>Товары</h1>
    <div class="ui items">
      <div
        class="item"
        v-for="good in goods"
        :key="good.name"
      >
        <div class="image" style="width: 7rem; height: 7rem;">
          <img :src="good.image">
        </div>
        <div class="content">
          <div class="header">{{ good.name }}</div>
          <div class="meta">
            <span class="price">{{ good.price }} руб.</span>
          </div>
          <div class="description">
            <p>{{ good.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'GoodsPage',
  data () {
    return {
      goods: null
    }
  },
  beforeRouteEnter (to, from, next) {
    function getGoods () {
      return axios.get('/static/content/goods.json')
    }

    getGoods().then(response => {
      next(vm =>
        vm.setGoods(response.data.goods)
      )
    })
  },
  beforeRouteUpdate (to, from, next) {
    function getGoods () {
      return axios.get('/static/content/about.json')
    }

    getGoods().then(response => {
      next(vm =>
        vm.setGoods(response.data.goods)
      )
    })
  },
  methods: {
    setGoods (goods) {
      this.goods = goods
    }
  }
}
</script>
