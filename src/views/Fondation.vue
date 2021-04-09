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
          <p class="pt-6"></p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="content md:grid md:grid-cols-4 md:gap-6">
        <div class="text col-span-3">
          <div class="mb-6"><h2>Logo</h2></div>
            <div class="chapter grid grid-cols-4 gap-6">
              <div class="light">
                <img src="../assets/img/fondation/fondation.png" alt="logo">
              </div>
              <div class="dark">
                <img src="../assets/img/fondation/fondation-noir-au-blanc.png" alt="logo">
              </div>
              <div class="end light">
                <img src="../assets/img/fondation/fondation-2.png" alt="logo">
              </div>
              <div class="end dark">
                <img src="../assets/img/fondation/fondation-noir-au-blanc-2.png" alt="logo">
              </div>
              <div class="col-span-full"><h3 class="mb-0 pb-0">Monochrome</h3></div>
              <div class="light">
                <img src="../assets/img/fondation/fondation-bleu.png" alt="logo">
              </div>
              <div class="end dark">
                <img src="../assets/img/fondation/fondation-blanc.png" alt="logo">
              </div>
              <div class="light">
                <img src="../assets/img/fondation/fondation-noir-et-blanc.png" alt="logo">
              </div>
              <div class="end black">
                <img src="../assets/img/fondation/fondation-blanc-et-noir.png" alt="logo">
              </div>
            </div>
            <div class="col-span-full">
              <h3>Pictogrammes</h3>
              <div class="grid grid-cols-5">
              <img class="light" src="../assets/img/picto-zExcl.png" alt="picto">
              <img class="dark" src="../assets/img/picto-blanc-zExcl.png" alt="picto">
              <img class="light" src="../assets/img/picto-bleu-zExcl.png" alt="picto">
              <img class="black" src="../assets/img/picto-blanc-noir-zExcl.png" alt="picto">
              <img class="light" src="../assets/img/picto-noir-blanc-zExcl.png" alt="picto">
            </div>
          </div>
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
import Signature from '@/components/signature'
export default {
  name: 'Fondation',
  components: {
    Signature
  }
}
</script>