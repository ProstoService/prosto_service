<template lang="html">
  <sui-menu text>
    <router-link
      is="sui-menu-item"
      v-for="item in items"
      :key="item.content"
      :content="item.content"
      :active="isActive(item)"
      :to="item.to"
      @click="select(item)"
    />
  </sui-menu>
</template>

<script>
export default {
  name: 'MainMenu',
  data () {
    return {
      items: [
        {
          content: 'Главная', to: '/'
        },
        {
          content: 'О нас', to: '/about'
        },
        {
          content: 'Услуги', to: '/services'
        },
        {
          content: 'Товары', to: '/goods'
        },
        {
          content: 'Цены', to: '/prices'
        },
        {
          content: 'Контакты', to: '/contacts'
        }
      ],
      active: 'О нас'
    }
  },
  methods: {
    isActive (name) {
      return this.active === name
    },
    select (name) {
      this.active = name
    }
  }
}
</script>
