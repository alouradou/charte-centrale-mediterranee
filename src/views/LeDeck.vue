<template>
  <div :id="$options.name">
    <div class="container light">
      <div class="content">
        <div class="chapter md:grid md:grid-cols-2 md:gap-6">
          <div>
            <h1>
              <img src="../assets/img/le-deck/Le-Deck-med.svg" alt="logo Centrale Marseille Le Deck">
            </h1>
          </div>
          <div class="pt-6">
            <h3>Centrale Méditerranée et ses marques filles</h3>
              <p>Toutes les activités portées par Centrale Méditerranée s'expriment à partir du logo principal. Une architecture de marque forte et monolithique renforce la cohérence au sein de l'école. Pour appuyer cette uniformité, les marques filles sont distinguées par une couleur unique.
              Chaque couleur reflète la spécificité et les activités propres des marques filles. Pour autant que la nuance et l'intensité lumineuse s’accordent avec le bleu.</p>
            <h3>Le Deck</h3>
            <p>À Centrale Méditerranée, entreprendre c’est faire germer des idées lumineuses et responsables. À mi-chemin entre le jaune et le vert clair, cette nuance fraiche reflète bien l’esprit de notre pré-incubateur qui forme nos élèves à imaginer demain.</p>
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
