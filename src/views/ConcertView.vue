<template>
  <div>
    <div>
      <h1 class="pl-12 pb-6 text-2xl font-bold">
        <span class="text-rougewerplay"
          >DEBUT <span class="text-jaune">DES</span> CONCERTS</span
        >
      </h1>
      <h1 class="pl-16 pr-16 text-sm font-medium">
        N’oubliez pas, tout les concert débutent à 23h du soir!
      </h1>
    </div>

    <div
      class="
        grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(300px,1fr))]
      "
    >
      <div class="p-3 pt-12">
        <cardconcert
          jour="Mar"
          date="26 juill."
          description="Isham, Dak, GreenZer et d’autres"
          nom="6Jays, Travs ..."
          image="/public/concert/jordon-conner-tIr-PWgSYB4-unsplash-1.png"
        />
      </div>

      <div class="p-3 pt-12">
        <cardconcert
          jour="Mar"
          date="27 juill."
          description="Loris, Jonas, Hugo, Arhur et d’autres"
          nom="Gaaris, Zak ..."
          image="/public/concert/jordon-conner-tIr-PWgSYB4-unsplash-2.png"
        />
      </div>

      <div class="p-3 pt-12">
        <cardconcert
          jour="Mar"
          date="28 juill."
          description="Ziak, DTF, GreenZer et d’autres "
          nom="Mala, Bem ..."
          image="/public/concert/jordon-conner-tIr-PWgSYB4-unsplash-3.png"
        />
      </div>

      <div class="p-3 pt-12">
        <cardconcert
          jour="Mar"
          date="29 juill."
          description="John, Ricardo, Bia et d’autres"
          nom="Isham, FujiPe ..."
          image="/public/concert/jordon-conner-tIr-PWgSYB4-unsplash-4.png"
        />
      </div>

      <div class="p-3 pt-12">
        <cardconcert
          jour="Mar"
          date="31 juill."
          description="Zun, Sun, RedColdChilliPaper et d’autres "
          nom="Dams, veld ..."
          image="/public/concert/jordon-conner-tIr-PWgSYB4-unsplash-5.png"
        />
      </div>

      <div class="p-3 pt-12">
        <cardconcert
          jour="Mar"
          date="30 juill."
          description="Ima, Dakar, GuideDeMontbe et d’autres"
          nom="Vald, Sas ..."
          image="/public/concert/jordon-conner-tIr-PWgSYB4-unsplash.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
import card from "../components/card.vue";
import cardconcert from "../components/cardconcert.vue";

export default {
  components: { card, cardconcert },
  name: "ArtistesView",
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>