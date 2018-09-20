<template>
  <div>
    <Header :title="this.viaje.name" />
    <DescripcionViaje 
      :destino="this.viaje.destination" 
      :descripcion="this.viaje.description"
      :fechaIda="this.viaje.date" />
    <hr />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import DescripcionViaje from "@/components/DescripcionViaje.vue";
const axios = require("axios");

export default {
  name: "Viaje",
  components: {
    Header,
    DescripcionViaje
  },
  data() {
    return {
      id: this.$route.params.id,
      viaje: []
    };
  },
  mounted() {
    this.getViaje();
  },
  methods: {
    getViaje() {
      axios.get("http://127.0.0.1:8000/viajeviajes/" + this.id).then(res => {
        this.viaje = res.data;
      });
    }
  }
};
</script>
