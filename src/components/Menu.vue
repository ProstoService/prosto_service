<template lang="html">
  <div class="ui secondary fixed pointing menu">
    <div class="ui text container">
      <a
          class="item"
          is="router-link"
          v-for="menuItem in menuItems"
          :class="{active:isActive(menuItem.key)}"
          :key="menuItem.key"
          :to="menuItem.to"
          @click.native="setActive(menuItem.key)"
      >
        {{ menuItem.content }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainMenu',
  data () {
    return {
      menuItems: [
        {
          key: 'home',
          content: 'Главная',
          to: '/'
        },
        {
          key: 'about',
          content: 'О нас',
          to: '/about'
        },
        {
          key: 'services',
          content: 'Услуги',
          to: '/services'
        },
        {
          key: 'products',
          content: 'Товары',
          to: '/products'
        },
        {
          key: 'contacts',
          content: 'Контакты',
          to: '/contacts'
        }
      ],
      active: ''
    }
  },
  created () {
    this.active = this.$router.currentRoute.path.substring(1)
  },
  watch: {
    '$route' (to, from) {
      this.active = to.path.substring(1)
    }
  },
  methods: {
    setActive (key) {
      this.active = key
    },
    isActive (key) {
      return (key === this.active)
    }
  }
}
</script>

<style>
  .ui.secondary.menu {
    background-color: rgba(255, 255, 255, 255);
  }
</style>
