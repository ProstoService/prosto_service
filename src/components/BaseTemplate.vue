<template>
  <div>
    <div>
      <MainMenu/>
      <div class="ui text container" style="margin-top: 4rem;">
        <router-view/>
      </div>
    </div>
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
