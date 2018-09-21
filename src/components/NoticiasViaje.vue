<template>
  <div>
    <Header title="Noticias" />
    <div class="container">
      <NoticiaViaje />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import NoticiaViaje from "@/components/NoticiaViaje.vue";

export default {
  components: {
    Header,
    NoticiaViaje
  }
};
</script>
