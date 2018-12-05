<template>
  <div>
    <div class="pusher">
      <main-menu />
      <main class="ui text expanded container"><app-view /></main>
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
.expanded {
  padding-top: 4rem;
  padding-bottom: 1.5rem;
}
</style>
