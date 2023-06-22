<template>
  <div :id="$options.name">
    <div class="container light">
      <div class="content">
        <div class="chapter md:grid md:grid-cols-2 md:gap-6">
          <div>
            <h1>
              <img src="../assets/img/fondation/fondation.png" alt="logo Fondation Centrale Marseille">
            </h1>
          </div>
          <div class="pt-6">
            <h3>Centrale Marseille et ses marques filles</h3>
            <p>Toutes les activités portées par Centrale Marseille s'expriment à partir du logo principal. Une architecture de marque forte et monolithique renforce la cohérence au sein de l'école. Pour appuyer cette uniformité, les marques filles sont distinguées par une couleur unique.
            Chaque couleur reflète la spécificité et les activités propres des marques filles. Pour autant que la nuance et l'intensité lumineuse s’accordent avec le bleu.</p>
            <h3>La Fondation</h3>
            <p>
              La Fondation Centrale Marseille ne se distingue pas par une couleur, car elle est portée directement par l’école. Elle se démarque uniquement par la composition typographique, afin de lui permettre une distinction juridique et une prise de parole autonome.
            </p>
            <a class="btn valid" :href="path+'zip/centrale-marseille-charte-graphique.zip'">Kit à télécharger</a>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="content md:grid md:grid-cols-4 md:gap-6">
        <div class="text col-span-3">
          <div class="mb-6"><h2>Logo</h2></div>
            <div class="chapter grid grid-cols-3 gap-6">
              <div class="light">
                <img src="../assets/img/fondation/fondation.png" alt="logo">
              </div>
              <div class="dark">
                <img src="../assets/img/fondation/fondation-noir-au-blanc.png" alt="logo">
              </div>
              <div class="end light">
                <img src="../assets/img/fondation/fondation-bleu.png" alt="logo">
              </div>
              <div class="end black">
                <img src="../assets/img/fondation/fondation-blanc.png" alt="logo">
              </div>
              <div class="end light">
                <img src="../assets/img/fondation/fondation-noir-et-blanc.png" alt="logo">
              </div>
              <div class="end black">
                <img src="../assets/img/fondation/fondation-blanc-et-noir.png" alt="logo">
              </div>
              <div class="col-span-full"><h3 class="mb-0 pb-0">Version courte</h3></div>
              <div class="light">
                <img src="../assets/img/fondation/fondation-2.png" alt="logo">
              </div>
              <div class="dark">
                <img src="../assets/img/fondation/fondation-noir-au-blanc-2.png" alt="logo">
              </div>
              <div class="end light">
                <img src="../assets/img/fondation/fondation-bleu-2.png" alt="logo">
              </div>
              <div class="end black">
                <img src="../assets/img/fondation/fondation-blanc-2.png" alt="logo">
              </div>
              <div class="end light">
                <img src="../assets/img/fondation/fondation-noir-et-blanc-2.png" alt="logo">
              </div>
              <div class="end black">
                <img src="../assets/img/fondation/fondation-blanc-et-noir-2.png" alt="logo">
              </div>
            </div>
            <div class="col-span-full">
              <h3>Pictogrammes</h3>
              <div class="grid grid-cols-5 gap-6">
              <img class="light" src="../assets/img/picto-zExcl.png" alt="picto">
              <img class="dark" src="../assets/img/picto-blanc-zExcl.png" alt="picto">
              <img class="light" src="../assets/img/picto-bleu-zExcl.png" alt="picto">
              <img class="black" src="../assets/img/picto-blanc-noir-zExcl.png" alt="picto">
              <img class="light" src="../assets/img/picto-noir-blanc-zExcl.png" alt="picto">
            </div>
          </div>
          <signature-med
              :logoWidth="134"
              logoUrl="img/fondation-2.png"
              color1="#000f9f"
              color2="#4d5f80">
          </signature-med>
          <Signature
            class="pt-6"
            logoUrl="img/fondation-2.png"
            :logoWidth="102"
            :logoHeight="71"
            color1="#000f9f"
            color2="#4d5f80">
          </Signature>
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
