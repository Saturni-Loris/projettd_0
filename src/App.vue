<script setup>
import { RouterLink, RouterView } from "vue-router";
import Card from "./components/card.vue";
</script>

<template>
  <div class="">
    <nav
      class="
        navbar navbar-expand-lg navbar-white
        border-orangewerplay
        mb-4
        border-b-2
        bg-bleunuit
      "
    >
      <div class="navbar-brand pl-2">
        <span v-if="avatar != null" class="mr-3">
          <img class="avatar" :src="avatar" />
        </span>
        <RouterLink to="/">{{ name }}</RouterLink>
      </div>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <MenuIcon class="text-white h-7 w-7" />
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <div class="nav-link">
              <RouterLink to="/programmation">Programmation</RouterLink>
            </div>
          </li>
          <hr class="my-2 border-t-2 bg-jaune" />
          <li class="nav-item">
            <div class="nav-link">
              <RouterLink to="/artistes">Artistes</RouterLink>
            </div>
          </li>
          <hr class="my-2 border-t-2 bg-jaune" />

          <li class="nav-item">
            <div class="nav-link">
              <RouterLink to="/festival">Festival</RouterLink>
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
            <div class="nav-link">
              <RouterLink to="/moncompte">Mon compte</RouterLink>
            </div>
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
            <div
              class="dropdown-menu bg-bleunuit"
              aria-labelledby="navbarDropdown"
            >
              <div class="dropdown-item">
                <RouterLink to="/evenement">Evénement</RouterLink>
              </div>

              <hr class="my-2 border-t-2 bg-jaune" />

              <div class="dropdown-item bg-bleunuit">
                <RouterLink to="/rappeur">Rappeur</RouterLink>
              </div>

              <hr class="my-2 border-t-2 bg-jaune" />

              <div class="dropdown-item">
                <RouterLink to="/pays">Pays</RouterLink>
              </div>

              <hr class="my-2 border-t-2 bg-jaune" />

              <div class="dropdown-item">
                <RouterLink to="/categoriemusique"
                  >Catégorie musique</RouterLink
                >
              </div>

              <hr class="my-2 border-t-2 bg-jaune" />
              <div class="dropdown-item">
                <RouterLink to="/participants">Participants</RouterLink>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <RouterView />

    <footer class="text-white mt-5 bg-bleunuit p-4 sm:p-6">
      <div class="md:flex md:justify-between">
        <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
          <div>
            <h2
              class="
                text-gray-900
                dark:text-white
                mb-6
                text-sm
                font-semibold
                uppercase
              "
            >
              Liens utiles
            </h2>
            <ul class="text-gray-600 dark:text-gray-400">
              <li class="mb-4">
                <a
                  href="concert"
                  class="
                    hover:font-semibold hover:text-jaune hover:no-underline
                  "
                  >Concert</a
                >
              </li>
              <li class="mb-4">
                <a
                  href="artistes"
                  class="
                    hover:font-semibold hover:text-jaune hover:no-underline
                  "
                  >Artistes</a
                >
              </li>
              <li class="mb-4">
                <a
                  href="programmation"
                  class="
                    hover:font-semibold hover:text-jaune hover:no-underline
                  "
                  >Programmation</a
                >
              </li>
              <li class="mb-4">
                <a
                  href="festival"
                  class="
                    hover:font-semibold hover:text-jaune hover:no-underline
                  "
                  >NR festival</a
                >
              </li>
            </ul>
          </div>
          <div>
            <h2
              class="
                text-gray-900
                dark:text-white
                mb-6
                text-sm
                font-semibold
                uppercase
              "
            >
              Contact
            </h2>
            <ul class="text-gray-600 dark:text-gray-400">
              <li class="mb-4">
                <a
                  href="contact"
                  class="
                    hover:font-semibold hover:text-jaune hover:no-underline
                  "
                  >Nous contacter</a
                >
              </li>
            </ul>

            <div class="mt-4 flex space-x-6">
              <a
                href="#"
                class="
                  text-gray-500
                  hover:font-semibold hover:text-jaune hover:no-underline
                "
              >
                <svg
                  class="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="
                  text-gray-500
                  hover:font-semibold hover:text-jaune hover:no-underline
                "
              >
                <svg
                  class="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h2
              class="
                text-gray-900
                dark:text-white
                mb-6
                text-sm
                font-semibold
                uppercase
              "
            >
              Legal
            </h2>
            <ul class="text-gray-600 dark:text-gray-400">
              <li class="mb-4">
                <a
                  href="/mentions"
                  class="
                    hover:font-semibold hover:text-jaune hover:no-underline
                  "
                  >Mentions légales</a
                >
              </li>
            </ul>
          </div>
        </div>

        <div class="mb-12 md:mb-0">
          <a href="/" class="flex items-center">
            <img
              src="/src/assets/logofestival.svg"
              class="h-16"
              alt="Night of republique Logo"
            />
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>


<style>
/* Import Styles application */
@import "@/assets/style.css";
</style>

<script>
import { MenuIcon } from "@heroicons/vue/solid";
import { emitter } from "../src/main";

import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

import {
  getStorage,
  ref,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

export default {
  components: { Card, MenuIcon },

  data() {
    return {
      user: {
        email: null,
        password: null,
      },
      userInfo: null,
      name: "Festival",
      avatar: null,
      isAdmin: false,
    };
  },

  mounted() {
    this.getUserConnect();

    emitter.on("connectUser", (e) => {
      this.user = e.user;
      //console.log("App => Rececption user connecté", this.user);
      this.getUserInfo(this.user);
    });

    emitter.on("deConnectUser", (e) => {
      this.user = e.user;
      //console.log("App => Reception user déconnecté", this.user);
      this.userInfo = null;
      this.name = "Festival";
      this.avatar = null;
      this.isAdmin = false;
    });
  },
  methods: {
    // Obtenir les informations du user connecté
    async getUserConnect() {
      await getAuth().onAuthStateChanged(
        function (user) {
          if (user) {
            // Récupération du user connecté
            this.user = user;
            // Recherche de ses infos complémentaires
            this.getUserInfo(this.user);
          }
        }.bind(this)
      );
      // Noter le bind(this), cas des zones isolées
      // lors de 2 strucutres imbiquées, Vue perd la visibilité
      // des données
      // On les ré injecte par le mot-clef this
    },

    async getUserInfo(user) {
      // Rechercher les informations complémentaires de l'utilisateur
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbUsers = collection(firestore, "users");
      // Recherche du user par son uid
      const q = query(dbUsers, where("uid", "==", user.uid));
      await onSnapshot(q, (snapshot) => {
        this.userInfo = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        //console.log("userInfo", this.userInfo);
        // userInfo étant un tableau, onn récupère
        // ses informations dans la 1° cellule du tableau : 0
        this.name = this.userInfo[0].login;
        this.isAdmin = this.userInfo[0].admin;
        // Recherche de l'image du user sur le Storage
        const storage = getStorage();
        // Référence du fichier avec son nom
        const spaceRef = ref(storage, "users/" + this.userInfo[0].avatar);
        getDownloadURL(spaceRef)
          .then((url) => {
            this.avatar = url;
          })
          .catch((error) => {
            //console.log("erreur downloadUrl", error);
          });
      });
    },
  },
};
</script>

<style>
@import "../src/assets/style.css";

.avatar {
  vertical-align: middle;
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
</style>


