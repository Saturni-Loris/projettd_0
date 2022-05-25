<script setup>
import { RouterLink, RouterView } from "vue-router";
import Card from "./components/card.vue";
</script>

<template>
  <div class="">
    <nav
      class="
        navbar navbar-expand-lg navbar-white
        border-orangewerplay border-b-2
        bg-bleunuit
      "
    >
      <div class="navbar-brand">
        <RouterLink to="/"
          ><img src="../src/assets/logoFestival.svg"
        /></RouterLink>
      </div>
      <button
        class="navbar-toggler bg-griswerplay"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <div class="nav-link">
              <RouterLink to="/creermatch">Programation</RouterLink>
            </div>
          </li>
          <hr class="my-2 border-t-2 bg-jaune" />
          <li class="nav-item">
            <div class="nav-link">
              <RouterLink to="/matchspopulaire">Artistes</RouterLink>
            </div>
          </li>
          <hr class="my-2 border-t-2 bg-jaune" />

          <li class="nav-item">
            <div class="nav-link">
              <RouterLink to="/matchspopulaire">Festival</RouterLink>
            </div>
          </li>
          <hr class="my-2 border-t-2 bg-jaune" />

          <li class="nav-item">
            <div class="nav-link">
              <RouterLink to="/contact">Contact</RouterLink>
            </div>
          </li>
          <hr class="my-2 border-t-2 bg-jaune" />

          <li class="nav-item">
            <a class="nav-link" href="pages/monCompte.html">Mon Compte</a>
          </li>
        </ul>

        <hr class="my-2 border-t-2 bg-jaune" />

        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Administration
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="pages/client/liste.html"
                >Clients</a
              >

              <hr class="my-2 border-t-2 bg-jaune" />

              <a class="dropdown-item" href="pages/abonnement/liste.html"
                >Abonnements</a
              >
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <RouterView />
  </div>
</template>


<style>
/* Import Styles application */
@import "@/assets/style.css";
</style>

<script>
export default {
  components: { Card },
};
</script>


