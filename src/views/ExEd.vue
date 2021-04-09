<template>
  <div :id="$options.name">
    <div class="container light">
      <div class="content">
        <div class="chapter md:grid md:grid-cols-2 md:gap-6">
          <div>
            <h1>
              <img src="../assets/img/ex-ed/logo-Centrale-Marseille-Executive-education.png" alt="logo Executive Education">
            </h1>
          </div>
          <p class="pt-6"><strong>Centrale Marseille Executive Education</strong> se différencie par sa couleur dominante : un violet soutenu de teinte prestigieuse répandue dans le milieu de la formation continue. Cherchant à former pour acquérir des nouveaux savoirs et savoir-faire, Executive Education répond aux transformations et des défis d’aujourd’hui et demain.
          </p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="content md:grid md:grid-cols-4 md:gap-6">
        <div class="text col-span-3">
          <div class="pb-6"><h2>Logo</h2></div>
          <div class="chapter grid grid-cols-3 gap-6">
            <div>
              <img class="light" src="../assets/img/ex-ed/logo-Centrale-Marseille-Executive-education.png" alt="logo">
            </div>
            <div class="end exed">
              <img src="../assets/img/ex-ed/logo-blanc-Centrale-Marseille-Executive-education.png" alt="logo">
            </div>
            <div class="light">
              <img src="../assets/img/ex-ed/logo-violet-Centrale-Marseille-Executive-education.png" alt="logo">
            </div>
            <div class="end dark">
              <img src="../assets/img/ex-ed/logo-blanc-Centrale-Marseille-Executive-education.png" alt="logo">
            </div>
            <div class="end light">
              <img src="../assets/img/ex-ed/logo-bleu-Centrale-Marseille-Executive-education.png" alt="logo">
            </div>
            <div class="end black">
              <img src="../assets/img/ex-ed/logo-blanc-Centrale-Marseille-Executive-education.png" alt="logo">
            </div>
          </div>
          <div class="chapter grid grid-cols-2 gap-6">
            <h3 class="col-span-full mt-6 mb-0">Version horizontale</h3>
            <div class="light ">
              <img src="../assets/img/ex-ed/logo-2-Centrale-Marseille-Executive-education.png" alt="logo">
            </div>
            <div class="end exed">
              <img src="../assets/img/ex-ed/logo-2-blanc-Centrale-Marseille-Executive-education.png" alt="logo">
            </div>
            <div class="light">
              <img src="../assets/img/ex-ed/logo-2-violet-Centrale-Marseille-Executive-education.png" alt="logo">
            </div>
            <div class="end dark">
              <img src="../assets/img/ex-ed/logo-2-blanc-Centrale-Marseille-Executive-education.png" alt="logo">
            </div>
            <div class="end light">
              <img src="../assets/img/ex-ed/logo-2-bleu-Centrale-Marseille-Executive-education.png" alt="logo">
            </div>
            <div class="end black">
              <img src="../assets/img/ex-ed/logo-2-blanc-Centrale-Marseille-Executive-education.png" alt="logo">
            </div>
          </div>
          <div class="col-span-full mt-6 mb-0">
            <h3>Pictogrammes</h3>
            <div class="grid grid-cols-5">
            <img class="light" src="../assets/img/ex-ed/picto-Centrale-Marseille-Executive-education.png" alt="picto">
            <img class="exed" src="../assets/img/picto-blanc-zExcl.png" alt="picto">
            <img class="light" src="../assets/img/ex-ed/picto-violet-Centrale-Marseille-Executive-education.png" alt="">
            <img class="dark" src="../assets/img/picto-blanc-zExcl.png" alt="picto">
            <img class="light" src="../assets/img/picto-bleu-zExcl.png" alt="picto">
            </div>
          </div>
          <div class="pt-6"><h2>Couleurs</h2></div>
          <Couleurs :colors="colors"></Couleurs>
          <Signature 
            class="pt-6"
            logoUrl="img/logo-ex-ed.png"
            :logoWidth="101"
            :logoHeight="62"
            color1="#000f9f"
            color2="#250e62">
          </Signature>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Couleurs from '@/components/tableau-couleurs'
import Signature from '@/components/signature'

export default {
  name: 'ExecutiveEducation',
  components: {
    Couleurs,
    Signature
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
      }]
    }
  },
}
</script>