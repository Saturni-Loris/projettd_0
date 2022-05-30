<template>
  <div class="container">
    <form enctype="multipart/form-data">
      <div class="card bg-dark">
        <div class="card-header">
          <h5 style="color: white">Création participant</h5>
        </div>

        <div class="card-body">
          <div class="row">
            <div class="col-6">
              <div>
                <img class="preview img-fluid" :src="imageData" />
              </div>
            </div>

            <div class="col-6">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Nom</span>
                </div>
                <input
                  class="form-control"
                  placeholder="Nom de la personne"
                  required
                />
              </div>
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Prénom</span>
                </div>
                <input
                  class="form-control"
                  placeholder="Prénom de la personne"
                  required
                />
              </div>
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Photo</span>
                </div>
                <div class="custom-file">
                  <input
                    type="file"
                    class="custom-file-input"
                    ref="file"
                    id="file"
                  />
                  <label class="custom-file-label" for="file"
                    >Sélectionner l'image</label
                  >
                </div>
              </div>
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Date naissance</span>
                </div>
                <input type="date" class="form-control" required />
              </div>
              <br />
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">Pays</span>
                </div>
                <select class="custom-select">
                  <option selected disabled>Sélectionner un Pays</option>
                </select>
              </div>
              <br />
            </div>
          </div>
        </div>

        <div class="card-footer">
          <button type="submit" class="btn btn-light float-left">Créer</button>
          <button class="btn btn-light float-right">
            <router-link to="/participants">Cancel</router-link>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "FicherappeurView",
  data() {
    return {
      imageData: null,
      listePays: [],
      rappeur: {
        nom: null,
        prenom: null,
        photo: null,
        naissance: null,
        nationalite: null,
      },
    };
  },

  mounted() {
    // Montage de la vue
    // Appel de la liste des Pays synchronisée
    this.getPays();
  },
  methods: {
    async getPays() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document Pays
      const dbPays = collection(firestore, "pays");
      // Liste des Pays synchronisée
      const q = query(dbPays, orderBy('nom', 'asc'));

      await onSnapshot(q, (snapshot) => {
        //  Récupération des résultats dans listePaysSynchro
        // On utilse map pour récupérer l'intégralité des données renvoyées
        // on identifie clairement le id du document
        // les rest parameters permet de préciser la récupération de toute la partie data
        this.listePays = snapshot.docs.map(doc) => (
          {id: doc.id, ...doc.data()}
        )
        console.log("Liste des pays", this.listePays);
      })
    },
};


</script>

<style scoped>
</style>


