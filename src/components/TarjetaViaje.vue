<template>
  <div class="container">
    <div class="card">
      <div class="card-top">
        <h3>{{ nombre }} | {{ destino }}</h3>
        <span>({{ carrera }})</span>
      </div>
      <div class="card-description">
        <span>{{ descripcion }}</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "TarjetaViaje",
  props: {
    nombre: String,
    destino: String,
    carrera: String,
    descripcion: String
  }
};
</script>

<style lang="stylus" scoped>
  .container
    margin-bottom 10px
    cursor pointer

  .card
    display flex
    box-shadow 0 5px 3px -3px rgba(0,0,0,.0)
    transition .5s
    &:hover
      box-shadow 0 5px 3px -3px rgba(0,0,0,.3)

  .card-top
    display flex
    flex-direction row
    align-items center
    padding 10px

  .card-description
    margin 0 0 10px 10px
    color #555

  h3
    margin 0 10px 0 0

</style>
