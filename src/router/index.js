import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ArtistesView from '../views/ArtistesView.vue'
import ProgrammationView from '../views/ProgrammationView.vue'
import FestivalView from '../views/FestivalView.vue'
import MentionsView from '../views/MentionsView.vue'
import MoncompteView from '../views/MoncompteView.vue'


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

import EvenementView from '../views/evenement/EvenementView.vue'




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

export default router



