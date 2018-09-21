<template>
  <div class="container info">
    <p>{{ descripcionLarga }}</p>
    <br />
    <h5>Detalles:</h5>
    <div>
      <ul>
        <li>Destino: {{ destino }}</li>
        <li>Fecha de ida: {{ fechaIda }}</li>
        <li>Fecha de regreso: {{ fechaVuelta }}</li>
      </ul>
      <a :href="url" target="blank">{{ url }}</a>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  props: {
    descripcionCorta: String,
    descripcionLarga: String,
    destino: String,
    fechaIda: String,
    fechaVuelta: String,
    url: String
  }
};
</script>

<style lang="stylus" scoped>
  .info
    color #222

  p
    font-size 1.5em
</style>
