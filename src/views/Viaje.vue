<template>
  <div>
    <Header :title="this.viaje.name" />
    <DescripcionViaje 
      :destino="this.viaje.destination"
      :descripcionLarga="this.viaje.description"
      :fechaIda="this.viaje.departureDate"
      :fechaVuelta="this.viaje.returnDate"
      :url="this.viaje.eventUrl" />
    <BtnSumarse />
    <hr />
    <NoticiasViaje :id="id" />
    <br />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import DescripcionViaje from "@/components/DescripcionViaje.vue";
import NoticiasViaje from "@/components/NoticiasViaje.vue";
import BtnSumarse from "@/components/BtnSumarse.vue";
const axios = require("axios");

export default {
  name: "Viaje",
  components: {
    Header,
    DescripcionViaje,
    NoticiasViaje,
    BtnSumarse
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
      axios.get("http://127.0.0.1:8000/api/viajes/" + this.id).then(res => {
        this.viaje = res.data;
      });
    }
  }
};
</script>
