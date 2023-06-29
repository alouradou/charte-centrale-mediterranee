<template>
  <div :id="$options.name">
    <div class="container light">
      <div class="content">
        <div class="chapter md:grid md:grid-cols-2 md:gap-6">
          <div class="pt-6">
            <h1>Alumni</h1>
          </div>
          <div>
            <img src="../assets/img/alumni/alumni-med.png"
                 alt="logo Centrale Marseille Alumni"
                 style="max-width: 300px;"
            >
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="content">
        <div class="text col-span-3">
          <signature-med
              :logoWidth="134"
              logoUrl="img/alumni-med.png"
              padding="4"
              color1="#000f9f"
              color2="#eb7708">
          </signature-med>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Couleurs from '@/components/tableau-couleurs.vue'
import Signature from '@/components/signature.vue'
import signatureMed from "@/components/signature-med.vue";

export default {
  name: 'Alumni',
  computed: {
    path: function () {
      process.env.NODE_ENV === 'production'
      ? '/charte_graphique/'
      : '/'
    }
  },
  data () {
    return {
      colors: [
      {
        Pantone:'BLUE 072',
        CMJN:'100, 90, 12, 2',
        RVB:'0, 15, 159',
        Hex:' #000f9f'
      },
      {
        Pantone:'716',
        CMJN:'2, 62, 99, 0',
        RVB:'235, 119, 8',
        Hex:'#eb7708'
      },
      {
        Pantone:'10% de 2374',
        CMJN:'7, 5, 3, 0',
        RVB:'239, 240, 244',
        Hex:' #eff0f4'
      }]
    }
  },
  components: {
    signatureMed,
    Couleurs,
    Signature
  }
}
</script>
