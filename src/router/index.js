import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ArtistesView from '../views/ArtistesView.vue'
import ProgrammationView from '../views/ProgrammationView.vue'
import FestivalView from '../views/FestivalView.vue'
import MentionsView from '../views/MentionsView.vue'
import MoncompteView from '../views/MoncompteView.vue'

import RappeurView from '../views/admin/RappeurView.vue'
import EvenementView from '../views/admin/EvenementView.vue'

import ListeParticipant from '../views/participant/ListeView.vue'
import CreateParticipant from '../views/participant/CreateView.vue'
import UpdateParticipant from '../views/participant/UpdateView.vue'
import DeleteParticipant from '../views/participant/DeleteView.vue'


import ConcertView from '../views/ConcertView.vue'



import ContactView from '../views/ContactView.vue'
import JaysView from '../views/lesartistes/JaysView.vue'
import BalmainView from '../views/lesartistes/BalmainView.vue'
import DamsView from '../views/lesartistes/DamsView.vue'
import FujipeView from '../views/lesartistes/FujipeView.vue'
import GaarisView from '../views/lesartistes/GaarisView.vue'
import GreenzerView from '../views/lesartistes/GreenzerView.vue'
import IshamView from '../views/lesartistes/IshamView.vue'
import TravsView from '../views/lesartistes/TravsView.vue'
import VeldView from '../views/lesartistes/VeldView.vue'





import card from '../components/card.vue'
import cardartiste from '../components/cardartiste.vue'


import lireplus from '../components/lireplus.vue'

import formulaire from '../components/formulaire.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'AccueilView', component: AccueilView },
    { path: '/artistes', name: 'ArtistesView', component: ArtistesView },
    { path: '/contact', name: 'ContactView', component: ContactView },
    { path: '/festival', name: 'FestivalView', component: FestivalView },
    { path: '/programmation', name: 'ProgrammationView', component: ProgrammationView },
    { path: '/mentions', name: 'MentionsView', component: MentionsView },
    { path: '/moncompte', name: 'MoncompteView', component: MoncompteView },

    { path: '/concert', name: 'ConcertView', component: ConcertView },

    { path: '/evenement', name: 'EvenementView', component: EvenementView },
    { path: '/rappeur', name: 'RappeurView', component: RappeurView },

    { path: '/participants', name: 'ListeParticipant', component: ListeParticipant, beforeEnter: guard },
    { path: '/createParticipant', name: 'CreateParticipant', component: CreateParticipant, beforeEnter: guard },
    { path: '/updateParticipant/:id', name: 'UpdateParticipant', component: UpdateParticipant, beforeEnter: guard },
    { path: '/deleteParticipant/:id', name: 'DeleteParticipant', component: DeleteParticipant, beforeEnter: guard },



    { path: '/jays', name: 'JaysView', component: JaysView },
    { path: '/balmain', name: 'BalmainView', component: BalmainView },
    { path: '/dams', name: 'DamsView', component: DamsView },
    { path: '/fujipe', name: 'FujipeView', component: FujipeView },
    { path: '/gaaris', name: 'GaarisView', component: GaarisView },
    { path: '/greenzer', name: 'GreenzerView', component: GreenzerView },
    { path: '/isham', name: 'IshamView', component: IshamView },
    { path: '/travs', name: 'TravsView', component: TravsView },
    { path: '/veld', name: 'VeldView', component: VeldView },


    { path: '/card', name: 'card', component: card },
    { path: '/cardartiste', name: 'cardartiste', component: cardartiste },


    { path: '/lireplus', name: 'lireplus', component: lireplus },


    { path: '/formulaire', name: 'formulaire', component: formulaire },




  ]
})

// On créé un guard : Observateur (fonction) permettant de savoir si un utilisateur
// a le droit d'utiliser une route
// paramètres : to : d'où il vient, from où il veut aller, next où il doit aller après contrôle
function guard(to, from, next) {
  // recherche utilisateur connecté
  getAuth().onAuthStateChanged(function (user) {
    if (user) {
      // User connecté
      console.log('router OK => user ', user);
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbUsers = collection(firestore, "users");
      // Recherche du user par son uid
      const q = query(dbUsers, where("uid", "==", user.uid));
      onSnapshot(q, (snapshot) => {
        let userInfo = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        // userInfo étant un tableau, on récupère
        // ses informations dans la 1° cellule du tableau : 0
        let isAdmin = userInfo[0].admin;
        if (isAdmin) {
          // Utilisateur administrateur, on autorise la page/vue
          next(to.params.name);
          return;
        } else {
          // Utilisateur non administrateur, renvoi sur accueil
          alert("Vous n'avez pas l'autorisation pour cette fonction");
          next({ name: "AccueilView" });
          return;
        }
      })
    } else {
      // Utilisateur non connecté, renvoi sur accueil
      console.log('router NOK => user ', user);
      next({ name: "AccueilView" });
    }
  });
}

export default router



