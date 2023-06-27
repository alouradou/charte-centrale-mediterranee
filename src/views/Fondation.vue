<template>
  <div :id="$options.name">
    <div class="container light">
      <div class="content">
        <div class="chapter md:grid md:grid-cols-2 md:gap-6">
          <div>
            <h1>
              <img src="../assets/img/fondation/fondation-med.svg" alt="logo Fondation Centrale Marseille">
            </h1>
          </div>
          <div class="pt-6">
            <h3>Centrale Méditerranée et ses marques filles</h3>
            <p>Toutes les activités portées par Centrale Méditerranée s'expriment à partir du logo principal. Une architecture de marque forte et monolithique renforce la cohérence au sein de l'école. Pour appuyer cette uniformité, les marques filles sont distinguées par une couleur unique.
            Chaque couleur reflète la spécificité et les activités propres des marques filles. Pour autant que la nuance et l'intensité lumineuse s’accordent avec le bleu.</p>
            <h3>La Fondation</h3>
            <p>
              La Fondation Centrale Méditerranée ne se distingue pas par une couleur, car elle est portée directement par l’école. Elle se démarque uniquement par la composition typographique, afin de lui permettre une distinction juridique et une prise de parole autonome.
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
