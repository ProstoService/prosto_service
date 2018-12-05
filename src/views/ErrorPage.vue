<template>
  <div class="content">
    <div class="ui two column centered grid">
      <div class="left floated">
        <i class="exclamation triangle icon" style="font-size: 10em;" />
      </div>
      <div class="column">
        <p style="font-size: 2em; margin-top: 1.5rem;">{{ payload.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
  props: ["payload"]
};
</script>
