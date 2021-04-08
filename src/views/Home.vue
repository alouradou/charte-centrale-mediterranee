<template>
  <div :id="$options.name">

    <intro></intro>
    
    <sum></sum>

    <div class="container">
      <div class="content md:grid md:grid-cols-4 md:gap-6">
        <div class="text col-span-3">
          <logo></logo>
          <logoDetail></logoDetail>
          <typographie></typographie>
          <couleurs></couleurs>  
          <signature 
            logoWidth="100" 
            logoHeight="100" 
            logoUrl="img/logo.png" 
            color="#4d5f80"></signature>
          <gabarits></gabarits>
        </div>
        <menu2 class="sous-menu col-span-1"></menu2>
      </div>
    </div>
  </div> 
</template>

<script>
// @ is an alias to /src
import intro from '@/components/intro'
import sum from '@/components/summary'
import menu2 from '@/components/menu2'
import logo from '@/components/logo'
import logoDetail from '@/components/logo-details'
import typographie from '@/components/typographie'
import couleurs from '@/components/couleurs'
import signature from '@/components/signature'
import gabarits from '@/components/gabarits'

export default {
  name: 'Home',
  components: {
    intro,
    sum,
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