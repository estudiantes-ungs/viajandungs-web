<template>
  <div id="app">
    <div id="nav" class="navbar navbar-expand-lg navbar-dark bg-primary">
      <router-link to="/"><span class="navbar-brand">Viajandungs</span></router-link>
      <div class="nav navbar-nav">
        <router-link to="/login" class="nav-item nav-link">Iniciar Sesión</router-link>
        <router-link to="/viaje/nuevo" class="nav-item nav-link">Nuevo</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="stylus">
  .container
    color #222
</style>
