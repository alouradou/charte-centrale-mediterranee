<template>
  <div :id="$options.name">
    <div class="container">
      <div class="content md:grid md:grid-cols-3 md:gap-6">
        <div class="text col-span-3">

          <div id="signature" class="chapter md:grid md:grid-cols-2 md:gap-6 my-6">
            <div class="col-span-full">
              <h1>Bienvenue !</h1>
              <h4>Ce site a pour objectif de vous aider à générer des signatures pour vos associations en base de vos mails pour un rendu plus professionnel !</h4>
              <p>Il intègre un outil de génération personnalisable ainsi que des tutoriels pour les différents plateformes (Thunderbird, Mac, iPhone).
                L'objectif est d'être le plus complet possible, alors n'hésitez pas à envoyer vos suggestions sur <a href="http://m.me/arthur.louradou/">messenger</a>.</p>
              <p id="compteur"></p>
            </div>

            <div class="col-span-full">
              <h2>Signature email</h2>
            </div>

          <signature
              :logoWidth="101"
              :logoHeight="53"
              logoUrl="img/logo.png"
              color1="#000f9f"
              color2="#4d5f80"></signature>

            <div class="col-span-full">
              <h2>Tutoriels d'installation</h2>
              <h3>Thunderbird <img style="height: 1.17em; width: auto; align-items: baseline" src="https://creation-web-56.fr/wp-content/uploads/2021/02/Thunderbird_Logo.png" /></h3>
              <iframe class="youtube" src="https://www.youtube.com/embed/2EPp9rJcPnU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <h3>Apple Mail (Mac) <img style="height: 1.17em; width: auto; align-items: baseline" src="http://peter.baumgartner.name/wp-content/uploads/2015/08/Mac-OS-X-10.10-Yosemite-Mail-icon-1024x1024.png" /></h3>
              <ul>
                <li>Rends-toi dans l'App Mail</li>
                <li>Barre du haut, va dans "Mail" > "Préférences... ⌘,"</li>
                <li>Dans "Signatures" sélectionne ton compte Centrale (configuré précédemment en suivant <a href="https://cri.centrale-marseille.fr/fr/service/serveurs-messagerie">ces informations</a> !)</li>
                <li>Appuie sur "+"</li>
                <li>Décoche "Toujours faire correspondre à la police par défaut" en bas de l'aperçu</li>
                <li>Colle ta signature dans le carré blanc (en utilisant le bouton "Copier la signature" de ce site, pas le HTML)</li>
                <li>⚠️ Les images ne chargent pas dans l'aperçu : c'est normal !</li>
                <li>Signe tes mails comme un pro !</li>
              </ul>
              <h3>Apple Mail (iPhone) <img style="height: 1.17em; width: auto; align-items: baseline" src="https://www.logolynx.com/images/logolynx/8d/8d21ef7cc65f7df97c7c1fda5f89c4ae.png" /></h3>
              <ul>
                <li>Rends-toi dans "Réglages" > "Mail" > "Signature" (tout en bas)</li>
                <li>Colle ta signature dans le carré blanc (en utilisant le bouton "Copier la signature" de ce site, pas le HTML)</li>
                <li>Signe tes mails comme un pro !</li>
              </ul>
              <h3>Webmail</h3>
              <p>❌ Impossible</p>
              <h3>Le reste</h3>
              <p>À venir...</p>
            </div>

            <div class="col-span-full">
              <h2>Crédits</h2>
              <p>
                Le site a été réalisé par Arthur Louradou, en adaptant le code de la plateforme de marque de Centrale Marseille,
                disponible sur <a href="https://github.com/Peh4/charte-centrale-marseille">Github</a> (toute ressemblance venant de là !).
              </p>
              <h3>Signature des Associations</h3>
              <p><strong>GInfo</strong> - Marie Le Goué</p>

              <h3>Contact</h3>
              <p>
                <a href="http://m.me/arthur.louradou/">Arthur Louradou</a>, <a href="mailto:arthur.louradou@centrale-marseille.fr">arthur.louradou@centrale-marseille.fr</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import intro from '../components/intro.vue'
// import sum from '../components/summary.vue'
import signature from "@/components/signature.vue";
export default {
  name: 'Home',
  components: {
    // intro,
    // sum
    signature
  }
}
</script>
