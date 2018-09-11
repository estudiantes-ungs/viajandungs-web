<template>
  <div class="home">
    <Header />
    <div class="list-group">
      <TarjetaViaje nombre="CACIC" carrera="Sistemas" />
      <TarjetaViaje nombre="JAIIO" carrera="Sistemas" />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import TarjetaViaje from "@/components/TarjetaViaje.vue";

export default {
  name: "home",
  components: {
    Header,
    TarjetaViaje
  }
};
</script>
