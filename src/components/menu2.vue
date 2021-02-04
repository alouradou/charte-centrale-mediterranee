<template>
    <nav id="menu-2">
      <p>
        <a class="btn end col-span-1 valid" href="/charte_graphique/zip/centrale-marseille-charte-graphique.zip">Kit à télécharger</a>
      </p>
      <ul>
        <li><a class="scrollactive-item" href="#" v-scroll-to="'#le-logo'">Le logo</a></li>
        <li><a class="scrollactive-item" href="#" v-scroll-to="'#typo'">Typographie</a></li>
        <li><a class="scrollactive-item" href="#" v-scroll-to="'#couleurs'">Couleurs</a></li>
        <li><a class="scrollactive-item" href="#" v-scroll-to="'#signature'">Signature d'email</a></li>
        <li><a class="scrollactive-item" href="#" v-scroll-to="'#gabarits'">Gabarits</a></li>
      </ul>

    </nav>
</template>

<script>
export default {
  name: 'menu2'
}
</script>