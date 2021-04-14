<template>
  <div :id="$options.name">
    <logo></logo>    
    <div class="container">
      <div class="content md:grid md:grid-cols-4 md:gap-6">
        <div class="text col-span-3">
          <logoDetail></logoDetail>
          <typographie></typographie>
          <couleurs></couleurs>  
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
import menu2 from '@/components/menu2'
import logo from '@/components/logo'
import logoDetail from '@/components/logo-details'
import typographie from '@/components/typographie'
import couleurs from '@/components/couleurs'
import signature from '@/components/signature'
import gabarits from '@/components/gabarits'


export default {

  name: 'Charte',
  components: {
    menu2,
    logo,
    logoDetail,
    typographie,
    couleurs,
    signature,
    gabarits
  }
}
</script>

<style lang="scss" scoped>
</style>