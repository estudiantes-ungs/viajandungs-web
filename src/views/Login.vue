<template>
  <div>
    <Header title="Iniciar Sesión" />
    <div class="container">
      <form action="#">
        <div class="form-group">
          <label>Usuario</label>
          <input type="text" class="form-control">
        </div>
    
        <div class="form-group">
          <label>Constraseña</label>
          <input type="password" class="form-control">
        </div>
        <button type="submit" class="btn btn-primary">Entrar</button>
      </form>
    </div>
  </div>
  
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "Login",
  components: { Header }
};
</script>
