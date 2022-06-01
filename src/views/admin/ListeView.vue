<template>
  <div class="container">
    <div class="py-6">
      <div class="p-4">
        <hr class="my-2 border-t-2 bg-jaune" />
        <h1 class="text-3xl font-bold text-bleunuit">
          CREATION
          <span class="text-jaune">&</span> ACTIONS DES PAYS
        </h1>
        <h1 class="py-4 text-sm font-medium text-bleunuit">
          Ici, trouver nom et actions modifiables des pays participants au
          festival Night of Republique
        </h1>
      </div>
    </div>

    <form class="flex items-center justify-center">
      <div class="input-group">
        <div class="input-group-prepend">
          <span
            class="
              input-group-text
              text-white
              rounded-l-lg
              border-2 border-jaune
              bg-bleunuit
            "
            >Nom du nouveau pays</span
          >
        </div>
        <input type="text" class="form-control" v-model="nom" required />
        <button
          class="btn btn-light"
          type="button"
          @click="createPays()"
          title="Création"
        >
          <i class="fa fa-save fa-lg"></i>
        </button>
      </div>
    </form>

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
              <form v-for="rappeur in filterByName" :key="rappeur.id">
                <div
                  class="flex justify-center py-2 sm:mx-10 md:mx-28 2xl:mx-10"
                >
                  <div class="input-group-prepend">
                    <span
                      class="
                        input-group-text
                        text-white
                        borde
                        rounded-l-lg
                        border-2 border-jaune
                        bg-bleunuit
                        px-4
                      "
                      >Nom du pays</span
                    >
                  </div>
                  <input
                    type="text"
                    class="form-control rounded-none"
                    v-model="rappeur.nom"
                    required
                  />
                  <button
                    class="btn btn-light"
                    type="button"
                    @click="updateRappeur(rappeur)"
                    title="Modification"
                  >
                    <i class="fa fa-save fa-lg"></i>
                  </button>
                  <button
                    class="btn btn-light"
                    type="button"
                    @click="deleteRappeur(rappeur)"
                    title="Suppression"
                  >
                    <i class="fa fa-trash fa-lg"></i>
                  </button>
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
// Bibliothèque Firestore : import des fonctions
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

export default {
  name: "ListeView",
  data() {
    return {
      listePays: [], // Liste des pays - collection pays Firebase
      nom: null, // Pour la création d'un nouveau pays
      filter: "",
    };
  },
  computed: {
    // Tri des pays par nom en ordre croissant
    orderByName: function () {
      // Parcours et tri des pays 2 à 2
      return this.listePays.sort(function (a, b) {
        // Si le nom du pays est avant on retourne -1
        if (a.nom < b.nom) return -1;
        // Si le nom du pays est après on retourne 1
        if (a.nom > b.nom) return 1;
        // Sinon ni avant ni après (homonyme) on retourne 0
        return 0;
      });
    },
    // Filtrage de la propriété calculée de tri
    filterByName: function () {
      // On effectue le fitrage seulement si le filtre est rnseigné
      if (this.filter.length > 0) {
        // On récupère le filtre saisi en minuscule (on évite les majuscules)
        let filter = this.filter.toLowerCase();
        // Filtrage de la propriété calculée de tri
        return this.orderByName.filter(function (pays) {
          // On ne renvoie que les pays dont le nom contient
          // la chaine de caractère du filtre
          return pays.nom.toLowerCase().includes(filter);
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
    // Appel de la liste des pays synchronisée
    this.getPays();
  },
  methods: {
    async getPays() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbPays = collection(firestore, "pays");
      // Liste des pays synchronisée
      const query = await onSnapshot(dbPays, (snapshot) => {
        //console.log("query", query);
        //  Récupération des résultats dans listePaysSynchro
        // On utilse map pour récupérer l'intégralité des données renvoyées
        // on identifie clairement le id du document
        // les rest parameters permet de préciser la récupération de toute la partie data
        this.listePays = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        //console.log("listepays", this.listePays);
      });
    },

    async createPays() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbPays = collection(firestore, "pays");
      // On passe en paramètre format json
      // Les champs à mettre à jour
      // Sauf le id qui est créé automatiquement
      const docRef = await addDoc(dbPays, {
        nom: this.nom,
      });
      //console.log("document créé avec le id : ", docRef.id);
    },

    async updatePays(pays) {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      // Reference du pays à modifier
      const docRef = doc(firestore, "pays", pays.id);
      // On passe en paramètre format json
      // Les champs à mettre à jour
      await updateDoc(docRef, {
        nom: pays.nom,
      });
    },

    async deletePays(pays) {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      // Reference du pays à supprimer
      const docRef = doc(firestore, "pays", pays.id);
      // Suppression du pays référencé
      await deleteDoc(docRef);
    },
  },
};
</script>

<style scoped>
</style>


