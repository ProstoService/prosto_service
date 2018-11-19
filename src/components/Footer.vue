<template>
  <div class="footer" style="height: 40px;">
    <!-- <div class="ui text container" style="margin-top: 0.5em;">
      <span style="color: rgba(34,36,38,.25);">(с) 2009 - {{ present }} мастерская "Простое Решение"</span>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    present () {
      return new Date().getFullYear().toString()
    }
  }
}
</script>
