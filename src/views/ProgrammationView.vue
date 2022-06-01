<template>
  <div class="">
    <div class="py-6">
      <div class="p-4">
        <hr class="my-2 border-t-2 bg-jaune" />
        <h1 class="text-3xl font-bold">
          TOUTE
          <span class="text-jaune">LA</span> PROGRAMMATION
        </h1>
        <h2 class="py-4 text-sm font-medium">
          Taper le nom de votre artiste préféré ou le jour où vous serez présent
          au festival dans le filtrage.
        </h2>
      </div>
    </div>

    <div class="card-body table-responsive">
      <table class="text-light table">
        <thead>
          <tr>
            <th scope="col">
              <span class="float-right">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span
                      class="
                        input-group-text
                        text-white
                        rounded-l-lg
                        border-2 border-jaune
                        bg-bleunuit
                        px-4
                      "
                      >Filtrage</span
                    >
                  </div>
                  <input type="text" class="form-control" v-model="filter" />
                </div>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <form v-for="evenement in filterByName" :key="evenement.id">
                <div class="py-2 sm:mx-10 md:mx-28 2xl:mx-10">
                  <div class="input-group-prepend">
                    <span
                      class="
                        input-group-text
                        text-white
                        borde
                        rounded-t-lg
                        border-2 border-jaune
                        bg-bleunuit
                        px-4
                      "
                      >Nom de l'événement</span
                    >
                  </div>
                  <input
                    type="text"
                    class="form-control rounded-none"
                    v-model="evenement.nom"
                    required
                  />
                  <RouterLink
                    to="concert"
                    class="hover:text-jaune hover:no-underline"
                  >
                    <lireplus
                      class="my-3 ml-52 sm:ml-96 md:ml-96 xl:ml-96 2xl:ml-96"
                    />
                  </RouterLink>
                </div>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import lireplus from "../components/lireplus.vue";
// Bibliothèque Firestore : import des fonctions
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

export default {
  components: { lireplus },
  name: "EvenementView",
  data() {
    return {
      listeEvenement: [], // Liste des evenement - collection evenement Firebase
      nom: null, // Pour la création d'un nv evenement
      filter: "",
      listeEvenementSynchro: [],
    };
  },
  computed: {
    // Tri des evenement par nom en ordre croissant
    orderByName: function () {
      // Parcours et tri des evenement 2 à 2
      return this.listeEvenementSynchro.sort(function (a, b) {
        // Si le nom de la evenement est avant on retourne -1
        if (a.nom < b.nom) return -1;
        // Si le nom de la evenement est après on retourne 1
        if (a.nom > b.nom) return 1;
        // Sinon ni avant ni après (homonyme) on retourne 0
        return 0;
      });
    },

    // Filtrage de la propriété calculée de tri
    filterByName: function () {
      // On effectue le fitrage seulement si le filtre est renseigné
      if (this.filter.length > 0) {
        // On récupère le filtre saisi en minuscule (on évite les majuscules)
        let filter = this.filter.toLowerCase();
        // Filtrage de la propriété calculée de tri
        return this.orderByName.filter(function (evenement) {
          // On ne renvoie que les evenement dont le libelle contient
          // la chaine de caractère du filtre
          return evenement.nom.toLowerCase().includes(filter);
        });
      } else {
        // Si le filtre n'est pas saisi
        // On renvoie l'intégralité de la liste triée
        return this.orderByName;
      }
    },
  },
  mounted() {
    // Montage de la vue
    // Appel de la liste des evenement synchronisée
    this.getEvenementSynchro();
  },
  methods: {
    async getEvenementSynchro() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document Evenement
      const dbEvenement = collection(firestore, "evenement");
      // Liste des Evenement synchronisée
      const query = await onSnapshot(dbEvenement, (snapshot) => {
        //console.log("query", query);
        //  Récupération des résultats dans listeEvenementSynchro
        // On utilse map pour récupérer l'intégralité des données renvoyées
        // on identifie clairement le id du document
        // les rest parameters permet de préciser la récupération de toute la partie data
        this.listeEvenementSynchro = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        //console.log("listeevenement", this.listeEvenement);
      });
    },
  },
};
</script>

<style scoped>
</style>


