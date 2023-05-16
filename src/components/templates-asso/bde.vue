<template>
  <table>
    <tr>
      <td>
              <span style="font-family: Verdana, Arial, Sans-Serif; font-size: 10pt; margin-top: 0pt;margin-right: 10pt;">
                <img v-if="data.logo" alt="" v-bind:src="data.logo" height="108" border="0">
                <img v-else alt="" src="http://alouradou.perso.centrale-marseille.fr/images/signature_logo_bde.png" height="108" border="0">
              </span>
      </td>
      <td class="logo" style="padding: 10px">
            <span v-bind:style="'color:'+data.mainColor+';font-family: Verdana, Arial, Sans-Serif; font-size: 10pt; margin-top: 0pt;'">
              <div style="" v-if="data.line1 || data.line2 || data.line3">
                <span style="font-weight: bold" v-if="data.line1">{{data.line1}}</span><br>
                <span v-if="data.line2">{{data.line2}}</span><br>
                <span v-if="data.line3">{{data.line3}}</span>
              </div>
              <div v-else>
                <span style="font-weight: bold" >Prénom Nom</span><br>
                <span>Poste</span><br>
              </div>
            </span>
        <table width="241" height="37">
          <tbody>
          <tr>
            <td align="left">
              <a v-if="data.facebook" v-bind:href="data.facebook">
                <img alt="" src="http://alouradou.perso.centrale-marseille.fr/images/signature_facebook.png" width="25" height="25">
              </a>
            </td>
            <td align="left">
              <a v-if="data.website" v-bind:href="data.website">
                <img alt="" src="http://alouradou.perso.centrale-marseille.fr/images/signature_web.png" width="25" height="25">
              </a>
            </td>
            <td align="left">
              <a v-if="data.mail" v-bind:href="'mailto:'+data.mail">
                <img alt="" src="http://alouradou.perso.centrale-marseille.fr/images/signature_email.png" width="25" height="25">
              </a><br>
            </td>
            <td align="left">
              <a v-if="data.linkedin" v-bind:href="data.linkedin">
                <img alt="" src="http://alouradou.perso.centrale-marseille.fr/images/signature_linkedin.png" width="25" height="25">
              </a>
            </td>
            <td v-if="data.telephone1">
              <a v-bind:href="data.telephone1">
                <img alt="" src="http://alouradou.perso.centrale-marseille.fr/images/signature_telephone.png" width="25" height="25">
              </a>
            </td>
            <td v-if="data.telephone1"><a v-bind:href="data.telephone1" style="text-decoration: none;">
                <span style="font-size: 9pt;font-family: Verdana, Arial, Sans-Serif;white-space: nowrap;color:black;">
                    {{data.tel1_formatted}}
                </span>
            </a>
            </td>
          </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "bde",
  props: ["asso","data"],
  data () {
    return {
      asso: this.asso,
      line1: this.data.line1,
      line2: this.data.line2,
      line3: this.data.line3,
      mainColor: this.data.mainColor,
      telephone1: this.data.telephone1,
      tel1_formatted: this.data.tel1_formatted,
      logo: this.data.logo,
      facebook: this.data.facebook,
      website: this.data.website,
      linkedin: this.data.linkedin,
      mail: this.data.mail,
      youtube: this.data.youtube,
    }
  }
}
</script>

<style scoped>

</style>
