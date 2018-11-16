<template>
  <div>
    <h1>О нас</h1>
    <img :src="photo" align="right" style="width: 30rem;"/>
    <p>
      {{ text }}
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
      text: ''
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
      this.text = data.text
    }
  }
}
</script>
