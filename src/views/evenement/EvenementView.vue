 <template>
  <div class="flex items-center justify-center">
    <form
      class="py-10 sm:mr-10 md:mr-10 xl:mr-10 2xl:mx-32"
      @submit.prevent="onCnx()"
    >
      <div class="pb-12 pr-10">
        <h1 class="px-10 text-3xl font-bold">
          CONNECTEZ
          <span class="text-jaune">-</span>VOUS
        </h1>
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <button class="text-white rounded-l-lg bg-bleunuit px-4">
            Email :
          </button>
        </div>
        <input
          class="form-control"
          placeholder="arthurpayacoco@gmail.com"
          type="text"
          v-model="user.email"
          required
        />
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <button class="text-white rounded-l-lg bg-bleunuit px-4">
            Mot de passe :
          </button>
        </div>
        <input
          class="form-control"
          type="password"
          v-model="user.password"
          required
          placeholder="********"
        />
      </div>
      <div class="alert alert-warning mb-3 text-center" v-if="message != null">
        {{ message }}
      </div>

      <div class="py-6">
        <div
          class="
            flex flex-shrink-0 flex-grow-0
            items-center
            justify-center
            pb-2
          "
        >
          <div class="">
            <button
              class="text-white rounded bg-bleunuit py-2 px-16 font-bold"
              type="submit"
            >
              Connexion
            </button>
          </div>
        </div>

        <div class="flex flex-shrink-0 flex-grow-0 items-center justify-center">
          <button
            class="
              font-base
              rounded
              border-2 border-bleunuit
              py-1
              px-8
              text-bleunuit
            "
            @click="onDcnx()"
            type="button"
          >
            Deconnexion
          </button>
        </div>
      </div>
    </form>
  </div>

  <div class="py-10">
    <hr class="my-2 border-t-2 bg-jaune" />

    <div class="pb-12 pr-10">
      <h1 class="p-10 text-3xl font-bold">
        LISTE DE TOUT
        <span class="text-jaune">LES</span> EVENEMENTS
      </h1>
    </div>
    <table class="table">
      <thead class="text-white bg-bleunuit">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nom</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="evenement in listeEvenement" :key="evenement.id">
          <td>{{ evenement.id }}</td>
          <td>{{ evenement.nom }}</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div>
    <div class="py-10">
      <hr class="my-2 border-t-2 bg-jaune" />

      <div class="pr-10">
        <h1 class="p-10 text-3xl font-bold">
          AJOUT
          <span class="text-jaune">ET</span> SUPPRESSION D'EVENEMENTS
        </h1>
      </div>
    </div>
    <form class="mb-3">
      <div
        class="
          flex
          items-center
          justify-center
          sm:mx-20
          md:mx-28
          xl:mx-64
          2xl:mx-72
        "
      >
        <div class="input-group">
          <div class="input-group-prepend">
            <button class="text-white rounded-l-lg bg-bleunuit px-4">
              Evénement
            </button>
          </div>
          <input
            type="text"
            v-model="nom"
            class="form-control"
            placeholder="Concert"
            required
          />
          <button
            class="btn btn-light"
            type="button"
            @click="createEvenement()"
            title="Modification"
          >
            <i class="fa fa-save fa-lg"></i>
          </button>
        </div>
      </div>
    </form>
    <table class="table">
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
  <hr />

  <div></div>
</template>

<script>
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

import {
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

export default {
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
      message: null,
      listeEvenement: [],
      nom: null,
      listeEvenementSynchro: [],
    };
  },

  mounted() {
    let user = getAuth().currentUser;
    if (user) {
      this.user = user;
      this.message = "Vous êtes connecté: " + this.user.email;
    } else {
      this.message = "User non connecté : " + this.user.email;
    }

    this.getEvenement();

    this.getEvenementSynchro();
  },

  methods: {
    onCnx() {
      signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
        .then((response) => {
          console.log("Vous êtes connecté", response.user);
          this.user = response.user;
          this.message = "Vous êtes connecté : " + this.user.email;
        })
        .catch((error) => {
          console.log("Erreur connexion", error);
          this.message = "Erreur d'authentification";
        });
    },

    onDnx() {
      signOut(getAuth())
        .then((response) => {
          this.user = getAuth().currentUser;
          this.user = {
            email: null,
            password: null,
          };
          console.log("Vous êtes deconnecté", this.user);
          this.message = "Vous n'êtes pasconnecté";
        })
        .catch((error) => {
          console.log("erreur deconnexion", error);
        });
    },

    async getEvenement() {
      const firestore = getFirestore();
      const dbEvenement = collection(firestore, "evenement");
      const query = await getDocs(dbEvenement);
      query.forEach((doc) => {
        let evenement = {
          id: doc.id,
          nom: doc.data().nom,
        };
        this.listeEvenement.push(evenement);
      });
    },

    async getEvenementSynchro() {
      const firestore = getFirestore();
      const dbEvenement = collection(firestore, "evenement");
      const query = await onSnapshot(dbEvenement, (snapshot) => {
        this.listeEvenementSynchro = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      });
    },

    createEvenement() {},
    updateEvenement(evenement) {},
    deleteEvenement(evenement) {},

    async createEvenement() {
      const firestore = getFirestore();
      const dbEvenement = collection(firestore, "evenement");
      const docRef = await addDoc(dbEvenement, {
        nom: this.nom,
      });
      console.log("document créé avec le id : ", docRef.id);
    },

    async updateEvenement(evenement) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "evenement", evenement.id);
      await updateDoc(docRef, {
        nom: evenement.nom,
      });
    },

    async deleteEvenement(evenement) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "evenement", evenement.id);
      await deleteDoc(docRef);
    },
  },
};
</script>

<style>
</style>
