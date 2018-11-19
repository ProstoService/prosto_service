<template>
  <div class="landing">
    <div class="centered">
      <div class="ui one column grid">
        <div class="center aligned one column row">
          <div class="column">
            <h1 style="font-style: bold; color: white; font-size: 5rem;">PROSTO SERVICE</h1>
          </div>
        </div>
        <div class="center aligned one column row">
          <div class="column">
            <a
              is="router-link"
              class="large ui basic inverted button"
              to="/about"
              style="font-style: bold; color: white; font-size: 1.5rem;"
            >
              О нас
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
  .centered {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
  }

  .landing {
    background-image: url('../../static/images/landing.jpeg');
    background-size: cover;
  }
</style>
