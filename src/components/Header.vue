<template>
  <div class="container">
    <h3>{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String
  }
};
</script>

<style lang="stylus" scoped>
  .container
    margin 20px
  
  h3
    margin 0

</style>
