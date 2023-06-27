<template>
  <div :id="$options.name">
    <div class="container light">
      <div class="content">
        <div class="chapter">
          <div>
            <h1>Outils Centrale Méditerranée</h1>
            <p>
              Cet outil vous permettra de créer des signatures conformes à la charte graphique de Centrale Méditerranée.
            <br/>
              Retrouvez la plateforme de marque et la charte graphique à l'adresse ci-dessous.
            </p>
            <a class="btn valid" href="https://www.centrale-mediterranee.fr/fr/plateforme-de-marque-et-charte-graphique">
              Plateforme de marque et charte graphique
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="content">
        <div class="text col-span-3">
          <signature-med
              :logoWidth="150"
              logoUrl="img/logo-med.svg"
              color1="#000f9f"
              color2="#4d5f80"></signature-med>
          <signature
            :logoWidth="101"
            :logoHeight="53"
            logoUrl="img/logo.png"
            color1="#000f9f"
            color2="#4d5f80"></signature>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import menu2 from '@/components/menu2.vue'
import signatureMed from '@/components/signature-med.vue'
import signature from '@/components/signature.vue'


export default {

  name: 'Charte',
  components: {
    menu2,
    signatureMed,
    signature
  }
}
</script>

<style lang="scss" scoped>
</style>
