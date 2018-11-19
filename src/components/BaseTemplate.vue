<template>
  <div>
    <div class="pusher">
      <MainMenu/>
      <div class="ui text container" style="margin-top: 4rem;">
        <router-view/>
      </div>
    </div>
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
