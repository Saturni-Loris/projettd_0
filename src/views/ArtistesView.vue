<template>
  <div>
    <div>
      <h1 class="p-8 text-3xl font-bold">Artistes</h1>
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
          description="Son dernier album  mondialement connu, il était impossible de ne pas inviter FujiPe."
          nom="FujiPe"
          image="/public/FujiPe.png"
        />
      </div>

      <div class="p-3 pt-12">
        <card
          jour="Jeu"
          date="28 juill."
          description="Du rap pour tous, Gaaris enverra du feu toute la nuit."
          nom="Gaaris"
          image="/public/Gaaris.png"
        />
      </div>

      <div class="p-3 pt-12">
        <card
          jour="Ven"
          date="29 juill."
          description="Ambiance planante et apaisante, reposer vous dans les textes de GreeZer."
          nom="GreeZer"
          image="/public/GreenZer.png"
        />
      </div>

      <div class="p-3 pt-12">
        <card
          jour="Sam"
          date="30 juill."
          description="Texte cru et impactant, Isham est parmis nous pour le Night of Republique festival!"
          nom="Isham"
          image="/public/isham.png"
        />
      </div>

      <div class="p-3 pt-12">
        <card
          jour="Ven"
          date="29 juill."
          description="Veld sera la pour tout casser la nuit du vendredi à samedi!"
          nom="Veld"
          image="/public/Veld.png"
        />
      </div>

      <div class="p-3 pt-12">
        <card
          jour="Sam"
          date="30 juill."
          description="Sûrement une des têtes les plus attendus ici."
          nom="Dams"
          image="/public/Dems.png"
        />
      </div>

      <div class="p-3 pt-12">
        <card
          jour="Dim"
          date="31 juill."
          description="Comment faire un festival sans TravS ? Parmi nous cette année pour nous faire danser."
          nom="Travs"
          image="/public/Travs.png"
        />
      </div>
    </div>
    <div class="px-28">
      <RouterLink to="/programmation">
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
            VOIR TOUTE LA PROGRAMMATION
          </p>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import card from "../components/card.vue";

export default {
  components: { card },
  name: "ArtistesView",
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>




