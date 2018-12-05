<template>
  <div id="app"><router-view /><vue-progress-bar></vue-progress-bar></div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      globalTitle: "Простое Решение"
    };
  },
  mounted() {
    this.$Progress.finish();
  },
  created() {
    this.$Progress.start();

    // eslint-disable-next-line no-unused-vars
    this.$router.beforeEach((to, from, next) => {
      this.$Progress.start();

      if (to.meta.title === "") {
        document.title = this.globalTitle;
      } else {
        document.title = to.meta.title + " | " + this.globalTitle;
      }

      next();
    });

    // eslint-disable-next-line no-unused-vars
    this.$router.afterEach((to, from) => {
      this.$Progress.finish();
    });

    this.$router.onError(() => {
      this.$_error(() => import("@/views/ErrorPage"), {
        text: "Кажется что-то пошло не так. Скоро все снова заработает!"
      });
      this.$Progress.fail();
    });
  }
};
</script>
