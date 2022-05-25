<template>
  <div>
    <h1 class="p-8 text-3xl font-bold">
      <span class="text-orangewerplay">Contactez</span> nous ici!
    </h1>
    <button />
    <div class="items-center justify-center">
      <formulaire />
    </div>

    <h1 class="p-8 text-3xl font-bold">Où somme-nous?</h1>

    <div class="p-12">
      <iframe
        class=""
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10787.625215898022!2d-0.56360965995031!3d47.47225526681405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480878c22a269f3f%3A0xba6ddbcced9ae54!2sPl.%20de%20la%20R%C3%A9publique%2C%2049100%20Angers!5e0!3m2!1sfr!2sfr!4v1653509566588!5m2!1sfr!2sfr"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
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