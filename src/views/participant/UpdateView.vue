<template>
    <div class="container">
        <form enctype="multipart/form-data"  @submit.prevent="updateParticipant">
            <div class="card bg-dark">

                <div class="card-header">
                    <h5 style="color:white;">Mise à jour participant</h5>
                </div>    

                <div class="card-body">   
                    <div class="row">
                        <div class="col-6">
                            <div class="text-center">
                                <img class="preview img-fluid" :src="imageData"/>
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" >Nom</span>
                                </div>
                                <input 
                                    class="form-control" placeholder="Nom de la personne"
                                    v-model="participant.nom"
                                    required />                    
                            </div>
                            <br/>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" >Prénom</span>
                                </div>
                                <input 
                                    class="form-control" placeholder="Prénom de la personne" 
                                    v-model="participant.prenom"
                                    required />                    
                            </div>
                            <br/>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">Photo</span>
                                </div>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input" ref="file" id="file"
                                    @change="previewImage" 
                                    >
                                    <label class="custom-file-label" for="file">Sélectionner l'image</label>
                                </div>
                            </div>
                            <br/>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" >Date naissance</span>
                                </div>
                                <input 
                                    type="date"
                                    class="form-control" 
                                    required 
                                    v-model="participant.naissance" 
                                    format="dd/mm/yyyy"
                                    />                    
                            </div>
                            <br/>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" >Pays</span>
                                </div>
                                <select class="custom-select" v-model="participant.nationalite">
                                    <option selected disabled>Sélectionner un Pays</option>

                                    <option v-for="pays in listePays" :key="pays.nom">
                                        {{pays.nom}}
                                    </option>
                                </select>
                            </div>
                            <br/>
                        </div>
                    </div>               
                </div>

                <div class="card-footer">   
                    <button type="submit" class="float-left btn btn-dark" >
                        Modifier
                    </button>
                    <button class="float-right btn btn-dark">
                        <RouterLink to="/participants">Cancel</RouterLink>
                    </button>
                </div>

            </div>
        </form>        
    </div>
</template>

<script>
// Bibliothèque Firestore : import des fonctions
import { 
    getFirestore, 
    collection, 
    doc, 
    getDoc,
    updateDoc, 
    onSnapshot, 
    query,
    orderBy
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'

// Storage
import { 
    getStorage, 
    ref, 
    getDownloadURL, 
    uploadString,
    deleteObject,
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'


export default {
    name:'UpdateView',
    data() {
        return {
            imageData:null,         // Image prévisualisée
            listePays:[],           // Liste des pays pour la nationalité du participant
            participant:{           // Le participant à créer
                nom:null,               // son nom
                prenom:null,            // son prénom
                photo:null,             // sa photo (nom du fichier)
                naissance:null,         // sa date de naissance
                nationalite:null        // sa nationalité
            },

            refParticipant:null,     // Référence du participant à modifier
            imgModifiee:false,       // Indique si l'image du participant a été modifiée, par défaut : non
            photoActuelle:null       // Photo actuelle du participant
        }
    },
    mounted(){ // Montage de la vue
        // Récupération du id passé en paramètre
        // On utilise le id passé par la route
        // via la variable système $route de la vue
console.log("id participant", this.$route.params.id);
        // Recherche participant concerné
        this.getParticipant(this.$route.params.id);
        // Appel de la liste des pays
        this.getPays();
    },

    methods :{

        async getPays(){            
            // Obtenir Firestore
            const firestore = getFirestore();
            // Base de données (collection)  document pays
            const dbPays = collection(firestore, "pays");
            // Liste des participants triés
            const q = query(dbPays, orderBy('nom', 'asc'));
            await onSnapshot(q, (snapshot) => {
                this.listePays = snapshot.docs.map(doc => (
                    {id:doc.id, ...doc.data()}
                ))        
            })      
        },

        async getParticipant(id){
            // Obtenir Firestore
            const firestore = getFirestore();
            // Base de données (collection)  document participant
            // Récupération sur Firestore du participant via son id
            const docRef = doc(firestore, "participant", id);
            // Référence du participant concerné
            this.refParticipant = await getDoc(docRef);
            // Test si le participant demandé existe
            if(this.refParticipant.exists()){
                // Si oui on récupère ses données
                this.participant = this.refParticipant.data();
                // Mémorisation photoActuelle
                this.photoActuelle = this.participant.photo;
            }else{
                // Sinon simple message d'erreur
                this.console.log("Participant inexistant");
            }
            // Obtenir le Storage
            const storage = getStorage();
            // Référence de l'image du participant
            const spaceRef = ref(storage, 'participant/'+this.participant.photo);
            // Récupération de l'url complète de l'image
            getDownloadURL(spaceRef)
                .then((url) => {
                    // Mise à jour de l'image prévisualisée
                    this.imageData = url;
            })
            .catch((error) =>{
                console.log('erreur downloadUrl', error);
            })
        },


        previewImage: function(event) {
            // Mise à jour de la photo du participant
            this.file = this.$refs.file.files[0];
            // Récupérer le nom du fichier pour la photo du participant
            this.participant.photo = this.file.name;
            // Si cette fonction s'exécute, c'est que l'image est modifiée 
            this.imgModifiee = true;
            // Reference to the DOM input element
            // Reference du fichier à prévisualiser
            var input = event.target;
            // On s'assure que l'on a au moins un fichier à lire
            if (input.files && input.files[0]) {
                // Creation d'un filereader
                // Pour lire l'image et la convertir en base 64
                var reader = new FileReader();
                // fonction callback appellée lors que le fichier a été chargé
                reader.onload = (e) => {
                    // Read image as base64 and set to imageData
                    // lecture du fichier pour mettre à jour 
                    // la prévisualisation
                    this.imageData = e.target.result;
                }
                // Demarrage du reader pour la transformer en data URL (format base 64) 
                reader.readAsDataURL(input.files[0]);        
            }
        },

        async updateParticipant(){
            // Si l'image a été modifiée
            if(this.imgModifiee){
                // On supprime l'ancienne
                const storage = getStorage();
                // Référence du fichier
                let docRef = ref(storage, 'participant/'+this.photoActuelle);
                // Suppression photo actuelle
                deleteObject(docRef);
                // création nouvelle photo
                // Référence de l'image à uploader
                docRef = ref(storage, 'participant/'+this.participant.photo);
                await uploadString(docRef, this.imageData, 'data_url').then((snapshot) => {
                    console.log('Uploaded a base64 string', this.participant.photo);                
                });                   
            }
            // Dans tous les cas on met à jour le participant dans Firestore
            const firestore = getFirestore();
            // Modification du participant à partir de son id
            await updateDoc(doc(firestore, "participant", this.$route.params.id), this.participant);
            // redirection sur la liste des participants
            this.$router.push('/participants');       
        }
    }

}
</script>

<style scoped>
a{
    color:white;
}
a:hover{
    text-decoration:none;
}
</style>


