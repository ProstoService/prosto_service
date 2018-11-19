<template>
  <div class="content">
    <h1>О нас</h1>
    <img :src="photo" align="right" style="width: 20rem; margin-left: 1rem;"/>
    <p
      v-for="(paragraph, index) in paragraphs"
      :key="index">
      {{ paragraph }}
    </p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AboutPage',
  data () {
    return {
      photo: '',
      paragraphs: []
    }
  },
  beforeRouteEnter (to, from, next) {
    function getData () {
      return axios.get('/static/content/about.json')
    }

    getData().then(response => {
      next(vm =>
        vm.setData(response.data)
      )
    })
  },
  beforeRouteUpdate (to, from, next) {
    function getData () {
      return axios.get('/static/content/about.json')
    }

    getData().then(response => {
      next(vm =>
        vm.setData(response.data)
      )
    })
  },
  methods: {
    setData (data) {
      this.photo = data.photo
      this.paragraphs = data.paragraphs
    }
  }
}
</script>
