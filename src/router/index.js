import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ArtistesView from '../views/ArtistesView.vue'
import ProgrammationView from '../views/ProgrammationView.vue'
import FestivalView from '../views/FestivalView.vue'
import ContactView from '../views/ContactView.vue'




import card from '../components/card.vue'


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


    { path: '/card', name: 'card', component: card },


    { path: '/lireplus', name: 'lireplus', component: lireplus },


    { path: '/formulaire', name: 'formulaire', component: formulaire },




  ]
})

export default router



