<template>
  <div>
    <div>
      <h1 class="p-8 text-3xl font-bold">
        <span class="text-jaune">LES</span> ARTISTES
      </h1>
    </div>

    <div
      class="
        grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(300px,1fr))]
        p-6
      "
    >
      <div class="p-3 pt-12">
        <RouterLink to="/jays">
          <cardartiste
            name="6Jays"
            image="/artistes/6Jays.png"
            date="24"
            jour="juill."
        /></RouterLink>
      </div>

      <div class="p-3 pt-12">
        <RouterLink to="/balmain">
          <cardartiste
            name="Balmain"
            image="/artistes/Balmain.png"
            date="25"
            jour="juill."
        /></RouterLink>
      </div>

      <div class="p-3 pt-12">
        <RouterLink to="/fujipe">
          <cardartiste
            name="FujiPe"
            image="/artistes/FujiPe.png"
            date="26"
            jour="juill."
        /></RouterLink>
      </div>

      <div class="p-3 pt-12">
        <RouterLink to="/gaaris">
          <cardartiste
            name="Gaaris"
            image="/artistes/Gaaris.png"
            date="27"
            jour="juill."
        /></RouterLink>
      </div>

      <div class="p-3 pt-12">
        <RouterLink to="/greenzer">
          <cardartiste
            name="GreenZer"
            image="/artistes/GreenZer.png"
            date="28"
            jour="juill."
        /></RouterLink>
      </div>

      <div class="p-3 pt-12">
        <RouterLink to="/isham">
          <cardartiste
            name="Isham"
            image="/artistes/Isham.png"
            date="29"
            jour="juill."
        /></RouterLink>
      </div>

      <div class="p-3 pt-12">
        <RouterLink to="/veld">
          <cardartiste
            name="Veld"
            image="/artistes/Veld.png"
            date="30"
            jour="juill."
        /></RouterLink>
      </div>

      <div class="p-3 pt-12">
        <RouterLink to="/dams">
          <cardartiste
            name="Dams"
            image="/artistes/Dems.png"
            date="31"
            jour="juill."
        /></RouterLink>
      </div>

      <div class="p-3 pt-12">
        <RouterLink to="/travs">
          <cardartiste
            name="Travs"
            image="/artistes/Travs.png"
            date="24"
            jour="juill."
        /></RouterLink>
      </div>
    </div>

    <div class="px-28 hover:text-jaune hover:no-underline">
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
import cardartiste from "../components/cardartiste.vue";

export default {
  components: { card, cardartiste },
  name: "ArtistesView",
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>




