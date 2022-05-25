<template>
  <div>
    <div class="pb-12">
      <h1 class="p-10 text-3xl font-bold">
        Bienvenue au Night of Republique festival
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
          image="/public/6Jays.png"
        />
      </div>

      <div class="p-3 pt-12">
        <card
          jour="Lun"
          date="25 juill."
          description="Implanté dans la musique depuis à peine 1 an. Balmain est la pour vous."
          nom="Balmain"
          image="/public/Balmain.png"
        />
      </div>

      <div class="p-3 pt-12">
        <card
          jour="Mar"
          date="26 juill."
          description="Comment faire un festival sans Cam ? Il sera la, et vous?"
          nom="Cam"
          image="/public/Cam.png"
        />
      </div>

      <div class="p-3 pt-12">
        <card
          jour="Mer"
          date="27 juill."
          description="Son dernier album  mondialement connu, c'est impossible sans FujiPe."
          nom="FujiPe"
          image="/public/FujiPe.png"
        />
      </div>
    </div>

    <div class="px-28">
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
          <RouterLink to="/">TOUT LES ARTISTES </RouterLink>
        </p>
      </div>
    </div>

    <div class="pb-4 pt-16">
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

      <div class="px-28">
        <div
          class="
            relative
            flex flex-shrink-0 flex-grow-0
            items-center
            justify-center
            gap-2.5
            self-stretch
            rounded-md
            bg-[#142435]
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
  </div>
</template> 



<script>
import card from "../components/card.vue";
import lireplus from "../components/lireplus.vue";

export default {
  components: { card, lireplus },
  name: "AccueilView",
  data() {
    return {};
  },
};
</script>



