<template>
  <div class="ui main container">
    <MainMenu/>
    <router-view/>
  </div>
</template>

<script>
import MainMenu from './Menu'

export default {
  name: 'BaseTemplate',
  components: {
    MainMenu
  }
}
</script>
