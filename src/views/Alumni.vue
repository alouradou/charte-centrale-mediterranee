<template>
  <div :id="$options.name">
    <div class="container light">
      <div class="content">
        <div class="chapter md:grid md:grid-cols-2 md:gap-6">
          <div>
            <h1>
              <img src="../assets/img/alumni/alumni-med.png" alt="logo Centrale Marseille Alumni">
            </h1>
          </div>
          <div class="pt-6">
            <h3>Centrale Méditerranée et ses marques filles</h3>
            <p>Toutes les activités portées par Centrale Méditerranée s'expriment à partir du logo principal. Une architecture de marque forte et monolithique renforce la cohérence au sein de l'école. Pour appuyer cette uniformité, les marques filles sont distinguées par une couleur unique.
            Chaque couleur reflète la spécificité et les activités propres des marques filles. Pour autant que la nuance et l'intensité lumineuse s’accordent avec le bleu.</p>
            <h3>Alumni</h3>
            <p>L’orange de Centrale Méditerranée Alumni marque l’énergie bienveillante de l’association et reste le témoin des multiples souvenirs et histoires faits sur le campus car elle correspond exactement au orange de l’ancienne charte. Cette volonté de continuité marque la pérennité des engagements et des missions de l’association des diplômés de Centrale Méditerranée.
            </p>
<!--            <a class="btn valid" :href="path+'zip/centrale-marseille-charte-graphique.zip'">Kit à télécharger</a>-->
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
