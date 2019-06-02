<template>
  <div>
    <Header title="Nuevo viaje" />
    <div class="container">
      <form action="#">
        <div class="row form-group">
          <div class="col">
            <label>Evento</label>
            <input type="text" v-model="name" maxlength="80" class="form-control">
          </div>
          <div class="col">
            <label>Carrera</label>
            <input type="text" v-model="career" maxlenght="80" class="form-control">
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
          <input type="text" v-model="destination" maxlength="80" class="form-control">          
        </div>
        <div class="form-group">
          <label>Descripción breve</label>
          <input type="text" v-model="shortDescription" maxlength="140" class="form-control">          
        </div>
        <div class="form-group">
          <label>Descripción</label>
          <textarea v-model="description" class="form-control"></textarea>          
        </div>
        <div class="form-group">
          <label>Url del evento</label>
          <input type="url" v-model="eventUrl" maxlength="240" class="form-control">         
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
      description: "",
      eventUrl: "",
      departureDate: "",
      returnDate: ""
    };
  },
  methods: {
    postViaje() {
      axios
        .post("http://127.0.0.1:8000/api/viajes/", {
          name: this.name,
          destination: this.destination,
          career: this.career,
          shortDescription: this.shortDescription,
          description: this.description,
          eventUrl: this.eventUrl,
          departureDate: this.departureDate,
          returnDate: this.returnDate
        })
        .then(res => {
          if (res.status == "201") {
            this.$router.push("#");
          }
        });
    }
  }
};
</script>
