<template>
  <div>
    <div>
      <main-menu />
      <main class="ui text content container" style="margin-top: 4rem;">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import MainMenu from "@/components/MainMenu";

export default {
  name: "BaseTemplate",
  components: {
    MainMenu
  }
};
</script>

<style scoped>
  .content {
    padding-bottom: 1.5rem;
  }
</style>