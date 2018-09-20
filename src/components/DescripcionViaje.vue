<template>
  <div class="container info">
    <p>{{ descripcion }}</p>
    <br />
    <h5>Detalles:</h5>
    <div>
      <ul>
        <li>Destino: {{ destino }}</li>
        <li>Fecha de ida: {{ fechaIda }}</li>
        <li>Fecha de regreso: </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    descripcion: String,
    destino: String,
    fechaIda: String
  }
};
</script>

<style lang="stylus" scoped>
  .info
    color #222

  p
    font-size 1.5em
</style>
