<template>
  <div>
    <div class="py-6">
      <div class="p-4">
        <hr class="my-2 border-t-2 bg-jaune" />
        <h1 class="text-3xl font-bold">
          ID, NOM
          <span class="text-jaune">&</span> ACTIONS DES EVENEMENTS
        </h1>
        <h1 class="py-4 text-sm font-medium">
          Ici, trouver les Id, nom et actions modifiables des evenement
          participants au festival Night of Republique
        </h1>
      </div>
    </div>

    <table class="table-responsive justify-center py-2 px-2">
      <thead class="text-white bg-bleunuit">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nom</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="evenement in listeEvenementSynchro" :key="evenement.id">
          <td>{{ evenement.id }}</td>
          <td>
            <input type="text" v-model="evenement.nom" />
          </td>
          <td>
            <button
              class="btn light"
              @click.prevent="updateEvenement(evenement)"
            >
              <i class="fa fa-edit fa-lg"></i>
            </button>
            <button
              class="btn light"
              @click.prevent="deleteEvenement(evenement)"
            >
              <i class="fa fa-trash fa-lg"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="">
    <div class="py-6">
      <div class="p-4">
        <hr class="my-2 border-t-2 bg-jaune" />
        <h1 class="text-3xl font-bold">
          LISTE
          <span class="text-jaune">DES</span> EVENEMENTS
        </h1>
        <h1 class="py-4 text-sm font-medium">
          Ajouter ici un nouvel événement participant au festival Night of
          Republique
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
            >Nom du nouveau evenement</span
          >
        </div>
        <input type="text" class="form-control" v-model="nom" required />
        <button
          class="btn btn-light"
          type="button"
          @click="createEvenement()"
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
              <form v-for="evenement in filterByName" :key="evenement.id">
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
                      >Nom du evenement</span
                    >
                  </div>
                  <input
                    type="text"
                    class="form-control rounded-none"
                    v-model="evenement.nom"
                    required
                  />
                  <button
                    class="btn btn-light"
                    type="button"
                    @click="updateEvenement(evenement)"
                    title="Modification"
                  >
                    <i class="fa fa-save fa-lg"></i>
                  </button>
                  <button
                    class="btn btn-light"
                    type="button"
                    @click="deleteEvenement(evenement)"
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
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

export default {
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
        console.log("query", query);
        //  Récupération des résultats dans listeEvenementSynchro
        // On utilse map pour récupérer l'intégralité des données renvoyées
        // on identifie clairement le id du document
        // les rest parameters permet de préciser la récupération de toute la partie data
        this.listeEvenementSynchro = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("listeevenement", this.listeEvenement);
      });
    },

    async createEvenement() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document evenement
      const dbEvenement = collection(firestore, "evenement");
      // On passe en paramètre format json
      // Les champs à mettre à jour
      // Sauf le id qui est créé automatiquement
      const docRef = await addDoc(dbEvenement, {
        nom: this.nom,
      });
      console.log("document créé avec le id : ", docRef.id);
    },

    async updateEvenement(evenement) {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document evenement
      // Reference du evenement à modifier
      const docRef = doc(firestore, "evenement", evenement.id);
      // On passe en paramètre format json
      // Les champs à mettre à jour
      await updateDoc(docRef, {
        nom: evenement.nom,
      });
    },

    async deleteEvenement(evenement) {
      // Obtenir Firestore
      const firestore = getFirestore();
      evenement;
      // Base de données (collection)  document evenement
      // Reference de la evenement à supprimer
      const docRef = doc(firestore, "evenement", evenement.id);
      // Suppression evenement référencé
      await deleteDoc(docRef);
    },
  },
};
</script>

<style scoped>
</style>


