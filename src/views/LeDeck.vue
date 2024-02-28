<template>
  <div :id="$options.name">
    <div class="container light">
      <div class="content">
        <div class="chapter md:grid md:grid-cols-2 md:gap-6">
          <div class="pt-6">
            <h1>Le Deck</h1>
          </div>
          <div>
            <img src="../assets/img/le-deck/Le-Deck-med.svg"
                 alt="logo Centrale Marseille Le Deck"
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
              logoUrl="img/Le-Deck-med.svg"
              padding="3"
              color1="#000f9f"
              color2="#d4b718">
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
  name: 'Deck',
  computed: {
    path: function () {
      process.env.NODE_ENV === 'production'
      ? '/signature/'
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
        Pantone:'103',
        CMJN:'31, 28, 100, 0',
        RVB:'212, 187, 24',
        Hex:'#d4b718'
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
