<template>
  <div id="couleurs" class="chapter md:grid md:grid-cols-2 md:gap-6">
    <div class="col-span-full">
      <h2>Couleurs</h2>
    </div>
    <div>
      <p>Un bleu en teinte dominante, bleu comme la science, Marseille et la France vues de l’international. Un bleu institutionnel, sérieux qui renforce la dimension scientifique de la marque, avec force et dynamisme. Un bleu de haute mer qui nous éloigne des côtes récréatives. Un bleu foncé qui permet le contraste et la distinction.</p>
      <p>Un gris en contrepoint met en valeur le bleu, engage notre sérieux, notre sobriété et apporte une touche design.</p>
    </div>
    <div>
      <h3>Teintes principales</h3>
      <table class="nuancier">
        <thead>
          <tr>
            <th>Teinte</th>
            <th>Pantone</th>
            <th>CMJN</th>
            <th>RVB</th>
            <th>#Hex</th>
          </tr>
        </thead>
        <tbody class="text-smaller">
          <tr>
            <td class="alpha"></td>
            <td>BLUE 072</td>
            <td>100, 90, 12, 2</td>
            <td>0, 15, 159</td>
            <td>#000f9f</td>
          </tr>
          <tr>
            <td class="beta"></td>
            <td>2374</td>
            <td>76, 58, 30, 14</td>
            <td>77, 95, 128</td>
            <td>#4d5f80</td>
          </tr>
          <tr class="border">
            <td class="gamma"></td>
            <td>10% de 2374</td>
            <td>100, 90, 12, 2</td>
            <td>0, 15, 159</td>
            <td>#eff0f4</td>
          </tr>
        </tbody>
      </table>
      <h3>Teintes secondaires</h3>
      <table class="nuancier">
        <thead>
          <tr>
            <th>Teinte</th>
            <th>RVB</th>
            <th>#Hex</th>
          </tr>
        </thead>
        <tbody class="text-smaller">
          <tr>
            <td class="valid"></td>
            <td>18, 140, 56</td>
            <td>#128c38</td>
          </tr>
          <tr>
            <td class="warning"></td>
            <td>220, 22, 47</td>
            <td>#dc162f</td>
          </tr>
          <tr>
            <td class="important"></td>
            <td>247, 175, 23</td>
            <td>#f7af17</td>
          </tr>
          <tr>
            <td class="info"></td>
            <td>97, 52, 138</td>
            <td>#61348a</td>
          </tr>
          <tr>
            <td class="neutral"></td>
            <td>36, 135, 185</td>
            <td>#2487b9</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {

  name: 'couleurs'
}
</script>