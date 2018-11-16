<template>
  <div>
    <h1>Услуги</h1>
    <div class="ui items">
      <div
        class="item"
        v-for="service in services"
        :key="service.name"
      >
        <div class="image">
          <img :src="service.image">
        </div>
        <div class="content">
          <a class="header">{{ service.name }}</a>
          <div class="description">
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ServicesPage',
  data () {
    return {
      services: null
    }
  },
  beforeRouteEnter (to, from, next) {
    function getServices () {
      return axios.get('/static/content/services.json')
    }

    getServices().then(response => {
      next(vm =>
        vm.setServices(response.data.services)
      )
    })
  },
  beforeRouteUpdate (to, from, next) {
    function getServices () {
      return axios.get('/static/content/about.json')
    }

    getServices().then(response => {
      next(vm =>
        vm.setServices(response.data.services)
      )
    })
  },
  methods: {
    setServices (services) {
      this.services = services
    }
  }
}
</script>
