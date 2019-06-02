<template>
  <div>
    <Header title="Viajes" />
    <div class="list-group">
        <TarjetaViaje v-for="(v, id) in viajes" 
        :nombre="v.name" 
        :destino="v.destination"
        :carrera="v.career" 
        :descripcionCorta="v.shortDescription"
        :key="id"
        :id="v.id" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import TarjetaViaje from "@/components/TarjetaViaje.vue";

const axios = require("axios");

export default {
  name: "home",
  components: {
    Header,
    TarjetaViaje
  },
  computed: {
    viajes() {
      return this.$store.state.viajes;
    }
  },
  mounted() {
    this.getViajes();
  },
  methods: {
    getViajes() {
      axios.get("http://127.0.0.1:8000/api/viajes").then(res => {
        this.$store.state.viajes = res.data;
      });
    }
  }
};
</script>
