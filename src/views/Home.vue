<template>
  <div class="landing">
    <div class="centered">
      <div class="ui one column grid">
        <div class="center aligned one column row" style="padding-bottom: 0px;">
          <div class="column">
            <h1 style="color: #1e1d1e; font-size: 3.5rem; margin-top: 0.9em;">
              МАСТЕРСКАЯ
            </h1>
          </div>
        </div>
        <div
          class="center aligned one column row"
          style="padding-top: 0px;padding-bottom: 0px;"
        >
          <div class="column">
            <h2 style="color: #1e1d1e; font-size: 4.5rem; margin-top: 0px;">
              "ПРОСТОЕ РЕШЕНИЕ"
            </h2>
          </div>
        </div>
        <div class="center aligned one column row">
          <div class="column">
            <a
              is="router-link"
              class="large ui basic secondary button"
              to="/about"
              style="color: #1e1d1e; font-style: bold; font-size: 1.5rem;"
            >
              Войти
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage"
};
</script>

<style scoped>
.centered {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
}

.landing {
  background-image: url("../../public/static/img/landing.jpeg");
  background-size: cover;
}
</style>
