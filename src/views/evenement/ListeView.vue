 <template>
  <div>
    <div class="title center">TD - 03 FireBase</div>
    <hr />

    <h5>Firebase - Se connecter</h5>

    <div>
      <h5>Liste des evenement - Simple liste</h5>
    </div>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nom</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="evenement in evenement" :key="evenement.id">
          <td>{{ evenement.id }}</td>
          <td>{{ evenement.nom }}</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
    <hr />
  </div>

  <div>
    <h5>Liste des evenement - Liste synchronisée</h5>
  </div>
  <form class="mb-3">
    <h6>Nouveau evenement</h6>
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">Nom</span>
      </div>
      <input type="text" v-model="nom" class="form-control" required />
      <button
        class="btn btn-light"
        type="button"
        @click="createEvenement()"
        title="Modification"
      >
        <i class="fa fa-save fa-lg"></i>
      </button>
    </div>
  </form>
  <table class="table">
    <thead class="thead-dark">
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
          <button class="btn light" @click.prevent="updateEvenement(evenement)">
            <i class="fa fa-edit fa-lg"></i>
          </button>
          <button class="btn light" @click.prevent="deleteEvenement(evenement)">
            <i class="fa fa-trash fa-lg"></i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  <hr />
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
      this.message = "User déjà connecté : " + this.user.email;
    } else {
      this.message = "User no connecté : " + this.user.email;
    }

    this.getEvenement();

    this.getEvenementSynchro();
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
};
</script>

<style>
.center {
  text-align: center;
}
.title {
  font-size: 1, 4rem;
  font-weight: 500;
  margin-bottom: 0, 4rem;
  color: #34495e;
}
</style>
