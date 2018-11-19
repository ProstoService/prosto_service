<template>
  <div class="content">
    <h1>Услуги</h1>
    <div class="ui divided items">
      <div
        class="item"
        v-for="service in services"
        :key="service.name"
      >
        <div class="image" style="width: 7rem; height: 7rem;">
          <img :src="service.image">
        </div>
        <div class="content">
          <div class="header">
            {{ service.name }}
          </div>
          <div class="meta"
            v-if="service.meta"
          >
            {{ service.meta }}
          </div>
          <div class="description">
            <p>{{ service.description }}</p>
          </div>
          <div class="extra">
            <a
              target="_blank"
              v-if="service.video"
              :href="service.video"
            >
              <i class="youtube icon"/>
              Видео
            </a>
          </div>
        </div>
        <div class="ui divider"></div>
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
    axios.get('/static/content/services.json').then(response => {
      next(vm =>
        vm.setServices(response.data.services)
      )
    }).catch(error => {
      console.log(error)
    })
  },
  beforeRouteUpdate (to, from, next) {
    axios.get('/static/content/services.json').then(response => {
      next(vm =>
        vm.setServices(response.data.services)
      )
    }).catch(error => {
      console.log(error)
    })
  },
  methods: {
    setServices (services) {
      this.services = services
    }
  }
}
</script>
