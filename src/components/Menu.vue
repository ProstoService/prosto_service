<template lang="html">
  <div class="ui secondary pointing menu">
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
          key: 'goods',
          content: 'Товары',
          to: '/goods'
        },
        {
          key: 'prices',
          content: 'Цены',
          to: '/prices'
        },
        {
          key: 'contacts',
          content: 'Контакты',
          to: '/contacts'
        }
      ],
      active: 'about'
    }
  },
  methods: {
    setActive (key) {
      this.active = key
    },
    isActive (key) {
      return key === this.active
    }
  }
}
</script>
