<template>
  <div>
    <h1>Услуги</h1>
    <div class="ui items">
      <div
        class="item"
        v-for="service in services"
        :key="service.name"
      >
        <div class="image" style="width: 7rem; height: 7rem;">
          <img :src="service.image">
        </div>
        <div class="content">
          <a
            class="header"
            @click="showModal(service.youtubeKey)"
          >
            {{ service.name }}
          </a>
          <div class="description">
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <VueSemanticUiModal class="small" :active="isStandardActive" @update:active="val => isStandardActive = val">
      <p slot="header">Confirmation needed</p>

      <div slot="content">
        <div class="ui embed" data-source="youtube" :data-id="youtubeKey">
        </div>
      </div>
    </VueSemanticUiModal>
  </div>
</template>

<script>
import VueSemanticUiModal from 'vue-semantic-modal'
import axios from 'axios'

export default {
  name: 'ServicesPage',
  data () {
    return {
      services: null,
      isStandardActive: false,
      youtubeKey: ''
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
    },
    showModal (youtubeKey) {
      console.log(youtubeKey)
      this.youtubeKey = youtubeKey
      this.isStandardActive = true
    }
  },
  components: {
    VueSemanticUiModal
  }
}
</script>
