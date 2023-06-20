<template>
  <div :id="$options.name">
    <logo></logo>
    <div class="container">
      <div class="content md:grid md:grid-cols-4 md:gap-6">
        <div class="text col-span-3">
          <logoDetail></logoDetail>
          <typographie></typographie>
          <couleurs></couleurs>
          <signature-med
              :logoWidth="134"
              logoUrl="src/assets/img/logo-med.png"
              color1="#000f9f"
              color2="#4d5f80"></signature-med>
          <signature
            :logoWidth="101"
            :logoHeight="53"
            logoUrl="img/logo.png"
            color1="#000f9f"
            color2="#4d5f80"></signature>
          <gabarits></gabarits>
        </div>
        <menu2 class="sous-menu col-span-1"></menu2>
      </div>
    </div>
  </div>
</template>

<script>
import menu2 from '@/components/menu2.vue'
import logo from '@/components/logo.vue'
import logoDetail from '@/components/logo-details.vue'
import typographie from '@/components/typographie.vue'
import couleurs from '@/components/couleurs.vue'
import signatureMed from '@/components/signature-med.vue'
import signature from '@/components/signature.vue'
import gabarits from '@/components/gabarits.vue'


export default {

  name: 'Charte',
  components: {
    menu2,
    logo,
    logoDetail,
    typographie,
    couleurs,
    signatureMed,
    signature,
    gabarits
  }
}
</script>

<style lang="scss" scoped>
</style>
