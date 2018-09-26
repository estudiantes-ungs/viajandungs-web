import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/login",
      component: () => import("./views/Login.vue")
    },
    {
      path: "/viaje/nuevo",
      component: () => import("./views/NuevoViaje.vue")
    },
    {
      path: "/viaje/:id",
      component: () => import("./views/Viaje.vue")
    },
    {
      path: "/viaje/:id/noticia/nueva",
      component: () => import("./views/NuevaNoticia")
    },
    {
      path: "/*",
      component: () => import("./views/BadUrl.vue")
    }
  ]
});
