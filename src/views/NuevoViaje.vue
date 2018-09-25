<template>
  <div>
    <Header title="Nuevo viaje" />
    <div class="container">
      <form action="#">
        <div class="row form-group">
          <div class="col">
            <label>Evento</label>
            <input type="text" v-model="name" class="form-control">
          </div>
          <div class="col">
            <label>Carrera</label>
            <input type="text" v-model="career" class="form-control">
          </div>
        </div>
        <div class="row form-group">
          <div class="col">
            <label>Fecha de ida</label>
            <input type="date" v-model="departureDate" class="form-control">
          </div>
          <div class="col">
            <label>Fecha de vuelta</label>
            <input type="date" v-model="returnDate" class="form-control">
          </div>
        </div>
        <div class="form-group">
          <label>Destino</label>
          <input type="text" v-model="destination" class="form-control">          
        </div>
        <div class="form-group">
          <label>Descripción breve</label>
          <input type="text" v-model="shortDescription" class="form-control">          
        </div>
        <div class="form-group">
          <label>Descripción</label>
          <textarea v-model="longDescription" class="form-control"></textarea>          
        </div>
        <div class="form-group">
          <label>Url del evento</label>
          <input type="url" v-model="eventUrl" class="form-control">         
        </div>
        <button type="submit" class="btn btn-primary" v-on:click="postViaje()">Agregar</button>
        <br />
        <br />
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
      name: "",
      destination: "",
      career: "",
      shortDescription: "",
      longDescription: "",
      eventUrl: "",
      departureDate: "",
      returnDate: ""
    };
  },
  methods: {
    postViaje() {
      axios
        .post("http://127.0.0.1:8000/viajes/", {
          name: this.name,
          destination: this.destination,
          career: this.career,
          shortDescription: this.shortDescription,
          longDescription: this.longDescription,
          eventUrl: this.eventUrl,
          departureDate: this.departureDate,
          returnDate: this.returnDate
        })
        .then(res => {
          console.log(res);
        });
    }
  }
};
</script>
