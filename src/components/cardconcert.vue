<template>
  <figure class="flex flex-col">
    <div
      class="
        flex
        w-full
        grid-cols-1
        flex-col
        gap-6
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
      "
    >
      <div class="relative cursor-pointer overflow-hidden shadow-lg">
        <img class="-3xl w-full object-cover" :src="image" alt="rappeur" />

        <div class="absolute bottom-0 right-0 px-6 py-4"></div>
      </div>
    </div>

    <figcaption class="relative border-2 border-bleunuit px-4 py-8">
      <div class="relative flex flex-col">
        <div class="order-first flex items-center pb-4">
          <h3 class="pr-2 text-lg font-medium leading-8">
            {{ jour }}
          </h3>

          <h3 class="pr-8 text-lg font-bold leading-8">
            {{ date }}
          </h3>
        </div>

        <div class="order-first flex items-center pb-4">
          <h3 class="pr-8 text-2xl font-bold leading-8">
            {{ nom }}
          </h3>
        </div>

        <h3 class="text-gray-400 text-base leading-8">{{ description }}</h3>
        <hr class="my-2 border-jaune" />

        <RouterLink to="evenement" class="hover:text-jaune hover:no-underline">
          <lireplus />
        </RouterLink>
      </div>
    </figcaption>
  </figure>
</template>


<script>
import lireplus from "./lireplus.vue";

export default {
  components: { lireplus },
  props: {
    image: String,
    description: String,
    nom: String,
    date: String,
    jour: String,
  },
};
</script>

