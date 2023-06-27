<template>
  <div :id="$options.name">
    <div class="container light">
      <div class="content">
        <div class="chapter md:grid md:grid-cols-2 md:gap-6">
          <div>
            <h1>
              <img src="../assets/img/ex-ed/ExEd-med.svg" alt="logo Executive Education">
            </h1>
          </div>
          <div class="pt-6">
            <h3>Centrale Méditerranée et ses marques filles</h3>
              <p>Toutes les activités portées par Centrale Méditerranée s'expriment à partir du logo principal. Une architecture de marque forte et monolithique renforce la cohérence au sein de l'école. Pour appuyer cette uniformité, les marques filles sont distinguées par une couleur unique.
              Chaque couleur reflète la spécificité et les activités propres des marques filles. Pour autant que la nuance et l'intensité lumineuse s’accordent avec le bleu.</p>
            <h3>Executive Education</h3>
            <p>
  Centrale Méditerranée Executive Education se différencie par un violet soutenu, teinte prestigieuse répandue dans le milieu de la formation continue.
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
              logoUrl="img/ExEd-med.svg"
              padding="3"
              color1="#000f9f"
              color2="#8a1e41">
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
  name: 'ExecutiveEducation',
  components: {
    signatureMed,
    Couleurs,
    Signature
  },
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
        Pantone:'2755',
        CMJN:'100, 100, 30, 22',
        RVB:'37, 14, 98',
        Hex:'#250e62'
      },
      {
        Pantone:'10% de 2374',
        CMJN:'7, 5, 3, 0',
        RVB:'239, 240, 244',
        Hex:' #eff0f4'
      }],
      colors2: [
        {
          CMJN:'97, 100, 4, 2',
          RVB:'57, 3, 142',
          Hex:'#39038e'
        },
        {
          CMJN:'90, 87, 0, 0',
          RVB:'73, 0, 188',
          Hex:'#4900bc'
        }
      ]
    }
  },
}
</script>
