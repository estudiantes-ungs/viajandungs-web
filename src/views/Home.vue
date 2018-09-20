<template>
  <div>
    <Header title="Viajes" />
    <div class="list-group">
        <TarjetaViaje v-for="(v, pk) in viajes" 
        :nombre="v.name" 
        :destino="v.destination"
        :carrera="v.career" 
        :descripcion="v.description" 
        :key="pk"
        :id="v.pk" />
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
  data() {
    return {
      viajes: []
    };
  },
  mounted() {
    this.getViajes();
  },
  methods: {
    getViajes() {
      axios.get("http://127.0.0.1:8000/viajeviajes").then(res => {
        this.viajes = res.data;
      });
    }
  }
};
</script>
