<template>
  <div :id="$options.name">
    <div class="container light">
      <div class="content">
        <div class="chapter md:grid md:grid-cols-2 md:gap-6">
          <div>
            <img src="../assets/img/fondation/fondation-med.svg"
                 alt="logo Fondation Centrale Marseille"
                 style="max-width: 300px;"
            >
          </div>
          <div class="pt-6">
            <h1>La fondation</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="content">
        <div class="text col-span-3">
          <signature-med
              :logoWidth="134"
              logoUrl="img/fondation-med.svg"
              padding="3"
              color1="#000f9f"
              color2="#4d5f80">
          </signature-med>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Signature from '@/components/signature.vue'
import signatureMed from "@/components/signature-med.vue";
export default {
  name: 'Fondation',
  computed: {
    path: function () {
      process.env.NODE_ENV === 'production'
      ? '/charte_graphique/'
      : '/'
    }
  },
  components: {
    signatureMed,
    Signature
  }
}
</script>
