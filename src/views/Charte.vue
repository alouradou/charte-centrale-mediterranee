<template>
  <div :id="$options.name">
    <div class="container light">
      <div class="content grid grid-cols-6 gap-6">
        <menu2 class="sous-menu col-span-1"></menu2>
        <div class="text col-span-5">
          <div id="le-logo" class="chapter grid grid-cols-5 gap-6">
            <h1 class="col-span-4">Le logo </h1>
            <a class="btn end col-span-1" href="">Kit à télécharger</a>
            <p class="col-span-3">Le logo de centrale Marseille est délciné en plusieurs versions pour s'adapter aux différents contextes d'utilisation. Le choix de la version à utiliser ne doit dépendre que des contraintes d'affichage ou d'impression.</p>
            <p></p>
            <div class="col-span-2">
              <h2>Officiel</h2> 
              <p>La version à privilégier partout ou c'est possible…</p>
            </div>
            <div class="col-span-3">
              <h2>Signature</h2>
              <p>…celle-ci en cas de hauteur contrainte</p>
            </div>
            <div class="col-span-2">
              <img src="/img/logo-zExcl.png" alt="logo">
            </div>
            <div class="col-span-2 end">
              <img src="/img/sign-zExcl.png" alt="logo">
            </div>
            <div class="col-span-4">
              <h2>Zone d'exclusion</h2>
              <p>La zone d'exclusion permet d'éviter qu'un élément placé trop proche du logo perturbe la lisibilité.</p>
            </div>
            <div class="col-span-2">
              <img src="/img/z-excl-zExcl.png" alt="logo">
            </div>
            <div class="col-span-2 end">
              <img src="/img/z-excl-sign-zExcl.png" alt="logo">
            </div>
            <div class="col-span-5">
              <h2>Fond Sombre</h2>
              <p>Cette déclinaison est utile sur un aplat de couleur (ou une photo) sombre</p>
            </div>
            <div class="col-span-2">
              <img class="dark" src="/img/blanc-zExcl.png" alt="logo">
            </div>
            <div class="col-span-2 end">
              <img class="dark" src="/img/blanc-sign-zExcl.png" alt="logo">
            </div>
            <div class="col-span-5">
              <h2>Monochrome</h2>
              <p>…sur une couleur (ou photo) claire</p>
            </div>
            <div class="col-span-2">
              <img src="/img/bleu-zExcl.png" alt="logo">
            </div>
            <div class="col-span-2 end">
              <img src="/img/bleu-sign-zExcl.png" alt="logo">
            </div>
            <div class="col-span-3">
              <h2>Noir et blanc</h2>
              <p>La version noir et blanc ne doit être utilisée qu'en cas de contraintes d'impressions ou d'affichage (fax, liseuse), merci de toujours préférer les versions en couleurs quand c'est possible</p>
            </div>
            <div></div>
            <div class="col-span-2">
              <img src="/img/noir-blanc-zExcl.png" alt="logo">
            </div>
            <div class="col-span-2 end">
              <img src="/img/noir-blanc-sign-zExcl.png" alt="logo">
            </div>
            <div class="col-span-2">
              <img class="black" src="/img/blanc-noir-zExcl.png" alt="logo">
            </div>
            <div class="col-span-2 end">
              <img class="black" src="/img/blanc-noir-sign-zExcl.png" alt="logo">
            </div>
          </div>
          <div id="typo">
            <h1>Typographie</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing, elit. Quos veritatis eum, dolores amet facere, temporibus quam quas asperiores beatae sapiente at harum fugiat debitis aspernatur eveniet dolor distinctio maxime vero.
          </div>
          <div id="couleurs">
            <h1>Couleurs</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi doloremque assumenda non ad, aspernatur culpa adipisci, sint ullam corrupti esse blanditiis eos beatae sunt omnis dolorum, minus totam similique exercitationem?
          </div>
          <div id="signature">
            <h1>Signature email</h1>
            <signature></signature>
          </div>
          <div id="gabarits">
            <h1>Gabarits</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error libero nemo saepe expedita, quis, assumenda, eius mollitia ea inventore cumque magnam! Dignissimos quasi ducimus obcaecati nam nisi voluptatibus aliquam eum.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import signature from '@/components/signature'
import menu2 from '@/components/menu2'

export default {

  name: 'Charte',
  components: {
    signature,
    menu2
  }
}
</script>

<style lang="scss" scoped>
</style>