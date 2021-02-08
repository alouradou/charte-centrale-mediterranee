<template>
  <div id="la-charte" class="container light">
    <div class="content md:grid md:grid-cols-4 md:gap-6">
      <div class="text col-span-2 light">
        <h2>La marque</h2>
        <p class="py-4"><strong>La marque se construit autour d’un texte fondamental.</strong>
        Ce texte exprime la vision de la marque sur l'avenir de son métier, sa mission, ses engagements, ses valeurs clés, ses traits de personnalité. 
        Il est là pour guider chacun dans sa manière de parler de l’école.
        Il oriente la stratégie de la communication externe, permet de construire des éléments de langage, un ton, une plume et c’est donc le point d’appui principal pour la construction du nouveau logo.</p>
      </div>
      <div class="text col-span-2">
        <myPlyr url="video/prez-plateforme.mp4"></myPlyr>
      </div>
      <div class="text ">
        <h3>Vision</h3>
        <p>L’humanité fait face à des défis inédits, dans un monde de plus en plus complexe et interdépendant.</p>
        <p>Pour y répondre, la science et la technique doivent être mises au service du bien commun.</p>
        <p>Les organisations ont donc besoin de nouvelles générations d’ingénieurs et de managers innovants, ouverts à la coopération et à l’international et empreints d’un grand sens des responsabilités.</p>

        <h3>Mission</h3>
        <p>Former, chercher, innover pour permettre à nos apprenants de devenir des managers scientifiques acteurs de la transformation des organisations et du monde</p>
      </div>
      <div class="text">
        <h3>Positionnement</h3>
        <p>L’école d’ingénieurs engagée qui forme et transforme.</p>
        <h3>Valeurs</h3>
        <ul>
          <li>L'exigence</li>
          <li>L'innovation</li>
          <li>La recherche du bien commun</li>
          <li>L'ouverture aux autres et au monde</li>
        </ul>
        <h3>Personnalité</h3>
        <ul>
          <li>Créative et audacieuse</li>
          <li>Responsable</li>
          <li>Bienveillante / inclusive</li>
          <li>Authentique</li>
        </ul>
      </div>
      <div class="text md:col-span-2 light">
        <h3>Engagements</h3>
        <ol>
          <li>Former des ingénieurs Centraliens avec le sens de l’engagement : généralistes de haut niveau scientifique et technique, experts dans le lancement et le pilotage de projets innovants et à forte culture internationale</li>
          <li>Cultiver une pédagogie pionnière et proposer à chaque apprenant le meilleur parcours mariant théorie et expérience pour l’accompagner dans sa transformation.</li>
          <li>Mener une politique de partenariats fondée sur des projets ambitieux et sélectifs (sur des critères d’innovation et de responsabilité) avec les entreprises et institutions dans l’écosystème territorial </li>
          <li>Développer la recherche et sa valorisation à l’échelle internationale et diffuser la culture scientifique</li>
          <li>Assurer notre mission de service public et fonder toutes nos actions sur les trois piliers : </li>
          <ul>
            <li>Esprit d’innovation</li>
            <li>Responsabilité Sociétale et Environnementale</li>
            <li>Ouverture et coopération</li>
          </ul>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>

import myPlyr from '@/components/myPlyr'

export default {
  name: 'summary',
  components: {
    myPlyr
  }
}
</script>