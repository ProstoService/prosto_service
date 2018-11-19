<template>
  <div class="ui text container">
    <MainMenu/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import MainMenu from './Menu'
import Footer from './Footer'

export default {
  name: 'BaseTemplate',
  components: {
    MainMenu,
    Footer
  }
}
</script>
