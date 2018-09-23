<template>
  <div>
    <h5>{{ titulo }}</h5>
    <p>
      {{ textoNoticia }}
    </p>
    <span>{{ fecha }}</span>
    <br />
    <hr />
    <br />
  </div>
</template>

<script>
export default {
  props: {
    titulo: String,
    textoNoticia: String,
    fecha: String
  }
};
</script>
