<template>
  <div>
    <h1 class="p-8 text-3xl font-bold">
      <span class="text-orangewerplay">Contactez</span> nous ici!
    </h1>
    <button />
    <div class="items-center justify-center">
      <formulaire />
    </div>
  </div>
</template>

<script>
import formulaire from "../components/formulaire.vue";

export default {
  components: { formulaire },
  name: "ContactView",
  data() {
    return {};
  },
};
</script>