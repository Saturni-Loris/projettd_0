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
      <div
        class="relative cursor-pointer overflow-hidden rounded-t-3xl shadow-lg"
      >
        <img class="-3xl w-full object-cover" :src="image" alt="sport" />

        <div class="absolute bottom-0 right-0 px-6 py-4"></div>
      </div>
    </div>

    <figcaption class="relative px-4 py-8">
      <div class="relative flex flex-col">
        <div class="order-first flex items-center pb-4">
          <h3 class="pr-8 text-2xl font-bold leading-8">
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
        <lireplus />
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
  },
};
</script>

