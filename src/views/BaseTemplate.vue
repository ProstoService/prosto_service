<template>
  <div>
    <div>
      <main-menu />
      <div class="ui text container" style="margin-top: 4rem;">
        <app-view />
      </div>
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
