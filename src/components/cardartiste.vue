<template>
  <figure class="flex">
    <div
      class="
        relative
        flex
        h-[198px]
        w-full
        grid-cols-1
        flex-col
        gap-6
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
      "
    >
      <img
        :src="image"
        class="absolute left-[9px] top-2 h-[167px] w-[332px] object-cover"
      />
      <div
        class="
          absolute
          left-[-6px]
          top-[150.5px]
          flex
          items-center
          justify-center
          gap-2.5
          border-2 border-jaune
          bg-bleunuit
          px-[70px]
          py-3.5
        "
      >
        <p class="text-white text-left text-base font-semibold">{{ name }}</p>
      </div>

      <div
        class="
          absolute
          left-[155px]
          top-[-5px]
          flex
          items-center
          justify-center
          gap-2.5
          border-2 border-jaune
          bg-bleunuit
          px-10
          py-0
        "
      >
        <p class="text-white text-base font-light">{{ date }}</p>
        <p class="text-white text-base font-medium">{{ jour }}</p>
      </div>
    </div>
  </figure>
</template>


<script>
export default {
  components: {},
  props: {
    image: String,
    name: String,
    date: String,
    jour: String,
  },
};
</script>
