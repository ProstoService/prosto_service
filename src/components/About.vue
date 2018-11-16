<template>
  <div>
    <h1>О нас</h1>
    {{ text }}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AboutPage',
  data () {
    return {
      text: ''
    }
  },
  beforeRouteEnter (to, from, next) {
    function getText () {
      return axios.get('/static/content/about.json')
    }

    getText().then(response => {
      next(vm =>
        vm.setText(response.data.text)
      )
    })
  },
  beforeRouteUpdate (to, from, next) {
    function getText () {
      return axios.get('/static/content/about.json')
    }

    getText().then(response => {
      next(vm =>
        vm.setText(response.data.text)
      )
    })
  },
  methods: {
    setText (text) {
      this.text = text
    }
  }
}
</script>
