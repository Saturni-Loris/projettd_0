<template>
  <div>
    <div>
      <h1 class="py-12 pr-12 text-right text-3xl font-bold">
        <span class="text-rougewerplay">NIGHT OF REPUBLIQUE FESTIVAL</span>
      </h1>
      <h1 class="pr-16 pl-16 text-right text-sm font-medium">
        Découvrez de
        <span class="text-rougewerplay">nombreux terrains </span> libres d’accès
        grâce à WerPlay. La plateforme vous offre aussi la possibilité de
        pratiquer différents sports comprenant
        <span class="text-rougewerplay">le foot, le basket et le volley !</span>
        Grâce à votre localisation ou aux différents filtres proposés, la
        recherche de la partie qu’il vous faut est un
        <span class="text-rougewerplay">jeu d’enfant</span>.
      </h1>

      <div class="grid place-items-center">
        <img
          class="p-8 drop-shadow-2xl"
          src="../assets/galerie/img4.png"
          alt="Image terrain basket"
        />
      </div>
    </div>

    <div>
      <h1 class="pl-12 pb-6 text-2xl font-bold">
        <span class="text-rougewerplay"
          >C’EST QUAND LE NIGHT OF REPUBLIQUE</span
        >
      </h1>
      <h1 class="pl-16 pr-16 text-sm font-medium">
        Mois de juillet (moment de l’année où il fait le plus chaud la nuit).
        Pendant 1 semaine (du samedi 23/22 au samedi 30/22). Débute dans les
        alentours de 21h00 (heure du début du coucher de soleil). Et se fini
        dans les alentours de 3h00 du matin.
      </h1>

      <div class="grid place-items-center">
        <img
          class="p-8 drop-shadow-2xl"
          src="../assets/galerie/img1.png"
          alt="Image panier basket"
        />
      </div>
    </div>

    <div>
      <h1 class="pr-12 pb-6 text-right text-2xl font-bold">
        <span class="text-rougewerplay">C’EST OÙ?</span>
      </h1>
      <h1 class="pr-16 pl-16 text-right text-sm font-medium">
        Le festival se situe sur la Place de La République à Angers.
      </h1>

      <div class="grid place-items-center">
        <img
          class="p-8 drop-shadow-2xl"
          src="../assets/galerie/img2.png"
          alt="Image terrain football"
        />
      </div>
    </div>

    <div>
      <h1 class="pl-12 pb-6 text-2xl font-bold">
        <span class="text-rougewerplay">GALERIE D’IMAGE</span>
      </h1>

      <section class="overflow-hidden">
        <div class="container mx-auto px-4 py-2 lg:px-32 lg:pt-24">
          <div class="-m-1 flex flex-wrap md:-m-2">
            <div class="flex w-1/2 flex-wrap">
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="galerie"
                  class="
                    block
                    h-full
                    w-full
                    rounded-lg
                    object-cover object-center
                  "
                  src="../assets/galerie/img3.png"
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="galerie"
                  class="
                    block
                    h-full
                    w-full
                    rounded-lg
                    object-cover object-center
                  "
                  src="../assets/galerie/img4.png"
                />
              </div>
              <div class="w-full p-1 md:p-2">
                <img
                  alt="galerie"
                  class="
                    block
                    h-full
                    w-full
                    rounded-lg
                    object-cover object-center
                  "
                  src="../assets/galerie/img5.png"
                />
              </div>
            </div>
            <div class="flex w-1/2 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="galerie"
                  class="
                    block
                    h-full
                    w-full
                    rounded-lg
                    object-cover object-center
                  "
                  src="../assets/galerie/img6.png"
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="galerie"
                  class="
                    block
                    h-full
                    w-full
                    rounded-lg
                    object-cover object-center
                  "
                  src="../assets/galerie/img2.png"
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="galerie"
                  class="
                    block
                    h-full
                    w-full
                    rounded-lg
                    object-cover object-center
                  "
                  src="../assets/galerie/img3.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import card from "../components/card.vue";
export default {
  components: { card },
  name: "FestivalView",
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>




