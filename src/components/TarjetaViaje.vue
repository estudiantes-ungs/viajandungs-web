<template>
  <div class="container">
    <div class="card">
      <h3 class="inline">{{ nombre }}</h3>
      <span class="inline">({{ carrera }})</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TarjetaViaje",
  props: {
    nombre: String,
    carrera: String
  }
};
</script>

<style lang="stylus" scoped>
  .container
    margin-bottom 10px
    cursor pointer

  .card
    display flex
    flex-direction row
    align-items center
    padding 10px
    box-shadow 0 5px 3px -3px rgba(0,0,0,.0)

    transition .5s
    &:hover
      box-shadow 0 5px 3px -3px rgba(0,0,0,.3)

  h3
    margin 0 10px 0 0

</style>
