<template>
    <div>
      <Header title="Nueva noticia" />
      <div class="container">
        <form :action="'/#/viaje/' + this.id">
          <div class="form-group">
            <label>Titulo</label>
            <input type="text" v-model="name" class="form-control">
          </div>
          <div class="form-group">
            <label>Texto</label>
            <textarea v-model="text" class="form-control"></textarea>
          </div>
          <button type="submit" v-on:click="postNoticia()" class="btn btn-primary">Agregar</button>
        </form>
      </div>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
const axios = require("axios");

export default {
  components: {
    Header
  },
  data() {
    return {
      id: this.$route.params.id,
      name: "",
      text: ""
    };
  },
  methods: {
    postNoticia() {
      axios
        .post("http://127.0.0.1:8000/noticias/?viaje=" + this.id, {
          viaje: this.id,
          name: this.name,
          text: this.text
        })
        .then(res => {
          console.log(res);
        });
    }
  }
};
</script>
