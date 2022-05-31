<template>
  <div>
    <div class="pb-12 pr-10">
      <h1 class="p-10 text-3xl font-bold">
        BIENVENUE AU NIGHT
        <span class="text-jaune">OF</span> REPUBLIQUE FESTIVAL
      </h1>
    </div>

    <div
      class="
        grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(300px,1fr))]
      "
    >
      <div class="p-3 pt-12">
        <card
          jour="Dim"
          date="24 juill."
          description="Avec ces textes profond, provocateur et impliqué, 6Jays sera présent."
          nom="6Jays"
          image="/6Jays.png"
        />
      </div>

      <div class="p-3 pt-12">
        <card
          jour="Lun"
          date="25 juill."
          description="Implanté dans la musique depuis à peine 1 an. Balmain est la pour vous."
          nom="Balmain"
          image="/Balmain.png"
        />
      </div>

      <div class="p-3 pt-12">
        <card
          jour="Mar"
          date="26 juill."
          description="Comment faire un festival sans Cam ? Il sera la, et vous?"
          nom="Cam"
          image="/Cam.png"
        />
      </div>

      <div class="p-3 pt-12">
        <card
          jour="Mer"
          date="27 juill."
          description="Son dernier album  mondialement connu, c'est impossible sans FujiPe."
          nom="FujiPe"
          image="/FujiPe.png"
        />
      </div>
    </div>

    <div class="mx-20 pt-7 sm:mx-52 md:mx-72 xl:mx-96 2xl:mx-96">
      <div
        class="
          relative
          flex flex-shrink-0 flex-grow-0
          items-center
          justify-center
          gap-2.5
          self-stretch
          rounded-md
          border-2
          p-2.5
        "
      >
        <p
          class="
            flex-shrink-0 flex-grow-0
            text-left text-base
            font-semibold
            text-bleunuit
          "
        >
          <RouterLink to="artistes">TOUT LES ARTISTES </RouterLink>
        </p>
      </div>
    </div>

    <div class="pb-4 pt-16">
      <hr class="my-2 mx-6 border-t-2 bg-jaune" />

      <h1 class="text-rougewerplay p-8 text-center text-3xl font-bold">
        Abonnes-toi pour ne rien manquer !
      </h1>
      <h1 class="pr-8 pl-8 text-center text-sm font-medium">
        Abonnes-toi pour recevoir toutes les actualités et news du festival
        Night of Republique en avant-première!
      </h1>
    </div>

    <form class="items-center justify-center p-8">
      <div class="">
        <div class="">
          <label
            class="
              text-gray-700
              mb-2
              block
              text-xs
              font-bold
              uppercase
              tracking-wide
            "
          >
            E-mail*
          </label>
          <input
            class="
              bg-gray-200
              text-gray-700
              border-orangewerplay
              mb-3
              block
              w-full
              appearance-none
              rounded
              border-2
              py-3
              px-4
            "
            id="email"
            type="email"
            placeholder="arthursaturni@gmail.com"
          />
          <p class="pb-4 text-xs italic">*champs obligatoire</p>
        </div>
      </div>

      <div class="mx-20 pt-7 sm:mx-52 md:mx-72 xl:mx-96 2xl:mx-96">
        <div
          class="
            relative
            flex flex-shrink-0 flex-grow-0
            items-center
            justify-center
            gap-2.5
            self-stretch
            rounded-md
            bg-bleunuit
            p-2.5
          "
        >
          <p
            class="
              text-white
              flex-shrink-0 flex-grow-0
              text-left text-base
              font-semibold
            "
          >
            JE M'INSCRIT
          </p>
        </div>
      </div>

      <div class="-mx-3 mb-6 flex flex-wrap">
        <div class="w-full px-3">
          <div class="flex flex-col">
            <div class="flex flex-col py-6">
              <label class="mt-16 inline-flex text-left text-xs">
                <input
                  type="checkbox"
                  class="form-checkbox h-5 w-5"
                  checked
                /><span class="ml-2">J’ai compris et j’accepte (1)</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <p class="text-xs italic text-griswerplay">
        (1) En communiquant mes informations, je consens à être recontacté par
        voie électronique par le festival Night of Republique. Ces données
        seront conservées durant 30 jours afin de pouvoir traiter au mieux ma
        demande. Je pourrai faire modifier ou supprimer mes informations sur
        simple demande. En savoir plus.
      </p>
    </form>

    <div class="px-10">
      <hr class="my-10 border-t-2 bg-jaune" />
      <div class="flex justify-center">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="facebook-f"
          class="mx-12 w-6"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
          ></path>
        </svg>

        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="twitter"
          class="mx-12 w-10"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
          ></path>
        </svg>
      </div>
      <hr class="my-10 border-t-2 bg-jaune" />
    </div>

    <div class="flex justify-center pt-12">
      <img
        src="../assets/logoavecnom.svg"
        alt="logo festival avec description du logo"
      />
    </div>

    <div>
      <h1 class="py-12 pr-12 text-center text-3xl font-bold">
        <span class="">C'est quoi?</span>
      </h1>
      <h1 class="pr-16 pl-16 pb-12 text-center text-sm font-medium">
        Un festival regroupant les artistes les plus émergent du rap français,
        francophone, et mondial ! Se déroulant sur la place de la république
        d’Angers. Celui-ci dure 1 semaine ! (attention à la fatigue ...)
        <br />
        <br />
        Petite particularitée: les concerts ne débuterons pas avant 23h du soir
        ... Oui, il faut attendre et c’est long ... Mais la danser et chanter
        toute la nuit ne sera que meilleur!
        <br />
        <br />
        Alors ? On attend quoi pour nous rejoindre ?
      </h1>

      <RouterLink to="festival">
        <lireplus class="mx-20 sm:mx-52 md:mx-72 xl:mx-96 2xl:mx-96" />
      </RouterLink>

      <div class="grid place-items-center">
        <img
          class="p-8 pt-12 drop-shadow-2xl"
          src="../assets/galerie/img1.png"
          alt="Image festival"
        />
      </div>
    </div>
  </div>
</template> 



<script>
import card from "../components/card.vue";
import cardartiste from "../components/cardartiste.vue";

import lireplus from "../components/lireplus.vue";
import { MenuIcon } from "@heroicons/vue/solid";

export default {
  components: { card, lireplus, MenuIcon, cardartiste },
  name: "AccueilView",
  data() {
    return {};
  },
};
</script>



