<template>
  <div>
    <h1 class="py-8 px-16 text-3xl font-bold">
      CONTACTEZ-NOUS <span class="text-jaune">ICI</span>
    </h1>
    <button />
    <div class="items-center justify-center">
      <formulaire />
    </div>

    <hr class="my-16 mx-6 border-t-2 bg-jaune" />

    <div class="pl-16">
      <h1 class="text-3xl font-bold">
        OÙ SOMMES<span class="text-jaune">-</span>NOUS?
      </h1>
      <h1 class="p-3 text-sm font-medium">
        Place de la République, 49100 Angers, France.
      </h1>
    </div>

    <div class="grid place-items-center p-4">
      <iframe
        class=""
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10787.625215898022!2d-0.56360965995031!3d47.47225526681405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480878c22a269f3f%3A0xba6ddbcced9ae54!2sPl.%20de%20la%20R%C3%A9publique%2C%2049100%20Angers!5e0!3m2!1sfr!2sfr!4v1653509566588!5m2!1sfr!2sfr"
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