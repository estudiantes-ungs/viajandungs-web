<template>
  <div>
    <div class="top-bar">
      <Header title="Noticias" />
      <a :href="'/#/viaje/' + id + '/noticia/nueva'"><button class="btn btn-secondary">Agregar noticia</button></a>
    </div>
    <div class="container">
      <h5 v-if="!noticias[0]">No hay noticias publicadas sobre este viaje</h5>
      <NoticiaViaje v-for="(n, pk) in noticias.slice().reverse()"
        :titulo="n.name" 
        :textoNoticia="n.text" 
        :fecha="n.createdAt"
        :key="pk" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import NoticiaViaje from "@/components/NoticiaViaje.vue";
const axios = require("axios");

export default {
  components: {
    Header,
    NoticiaViaje
  },
  props: {
    id: String
  },
  data() {
    return {
      noticias: []
    };
  },
  mounted() {
    this.getNoticias();
  },
  methods: {
    getNoticias() {
      axios
        .get("http://127.0.0.1:8000/noticias/?viaje=" + this.id)
        .then(res => {
          this.noticias = res.data;
        });
    }
  }
};
</script>

<style lang="stylus" scoped>
  h5
    text-align center
  
  .top-bar
    display flex
    align-items center
    margin-bottom 1em

  a
    float right
</style>
