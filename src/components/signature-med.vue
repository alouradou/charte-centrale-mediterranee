<template>
  <div id="signature" class="chapter md:grid md:grid-cols-2 md:gap-6 my-6">
    <div class="col-span-full">
      <h2>Signature email</h2>
    </div>
    <div class="formulaire py-0 my-0">
      <div class="resultat" ref="copySignature">
        <table>
          <td class="logo" style="padding: 10px">
            <img alt="logo Centrale Mediterranée" :src="absolutePath+logoUrl" :width="logoWidth" :style="'font-family: sans-serif; color: #ffffff; font-size: 10px; display: block; border: 0px; padding-bottom: 5px; padding-left: '+padding+'px;'" border="0">
            <a :href="urlImp">
              <div v-if="messageImp" :style="style0" style="margin-top: 10px;">
                <span>{{messageImp}}</span>
                <img :style="styleArrow" border="0" width="7" height="7" :src="absolutePath+'img/fleche-puce-blanche.png'" alt="Facebook">
              </div>
            </a>
            <div style="padding-top: 10px;" v-if="line1 || line2 || line3">
              <p :style="style1" style="font-weight: bold" v-if="line1">{{line1}}</p>
              <p :style="style1" v-if="line2">{{line2}}</p>
              <p :style="style1" v-if="line3">{{line3}}</p>
            </div>
            <div style="padding-top: 10px;" v-if="line4 || telephone1 || telephone2">
              <p :style="style1" v-if="line4">{{line4}}</p>
              <p v-if="telephone1" :style="style1">Tél. <a :style="styleA2" :href="tel1">{{telephone1}}</a></p>
              <p v-if="telephone2" :style="style1">Tél. <a :style="styleA2" :href="tel2">{{telephone2}}</a></p>
            </div>
            <div v-if="addressMars" style="padding-top: 10px;">
              <p :style="style2" style="font-weight: bold">Campus Marseille</p>
              <p :style="style3">Technopôle Château-Gombert</p>
              <p :style="style3">38 rue Frédéric Joliot-Curie</p>
              <p :style="style3">13013 Marseille</p>
              <p v-if="telephone1 === '' && telephone2 === ''" :style="style3"><a :style="styleA1" href="tel:+33491054545">tél. +33 (0)4 91 05 45 45</a></p>
            </div>
            <div v-if="addressNice" style="padding-top: 10px;">
              <p :style="style2" style="font-weight: bold">Campus Nice</p>
              <p :style="style3">Bâtiment Premium Méridia</p>
              <p :style="style3">61/63, avenue Simone Veil</p>
              <p :style="style3">06200 Nice</p>
              <p v-if="telephone1 === '' && telephone2 === ''" :style="style3"><a :style="styleA1" href="tel:+33491054647">tél. +33 (0)4 91 05 46 47</a></p>
            </div>
            <div style="padding-top: 10px;">
              <p :style="style3"><a :style="styleA2" href="https://www.centrale-mediterranee.fr">https://centrale-mediterranee.fr</a></p>
              <p :style="style3"><a v-if="facebook" :href="facebook"><img :style="styleImg" border="0" width="16" height="16" :src="absolutePath+'img/facebook.png'" alt="Facebook"></a> <a v-if="linkedin" :href="linkedin"><img :style="styleImg" border="0" width="16" height="16" :src="absolutePath+'img/linkedin.png'" alt="linkedin"></a> <a v-if="youtube" :href="youtube"><img :style="styleImg" border="0" width="16" height="16" :src="absolutePath+'img/youtube.png'" alt="youtube"></a> <a v-if="instagram" :href="instagram"><img :style="styleImg" border="0" width="16" height="16" :src="absolutePath+'img/instagram.png'" alt="instagram"></a></p>
            </div>
          </td>
        </table>
      </div>
    </div>
    <div class="champs py-0 my-0">
      <p>
        <input class="line" type="text" v-model="line1" placeholder="Prénom Nom">
        <input class="line" type="text" v-model="line2" placeholder="ligne 1">
        <input class="line" type="text" v-model="line3" placeholder="ligne 2">
        <input class="line" type="text" v-model="line4" placeholder="Bureau">
        <input class="line" type="text" v-model="telephone1" placeholder="téléphone 1">
        <input class="line" type="text" v-model="telephone2" placeholder="téléphone 2">
        <input class="line" type="text" v-model="messageImp" placeholder="Bandeau important" :style="styleInputMessageImp">
        <input class="line" type="text" v-model="urlImp" placeholder="URL important" :style="styleInputMessageImp">
      </p>
      <div>
        <p>
          <input id="addressMars" class="checkbox" type="checkbox" v-model="addressMars">
          <label class="px-2" for="modifyRS">Marseille</label>
          <input id="addressNice" class="checkbox" type="checkbox" v-model="addressNice">
          <label class="px-2" for="modifyRS">Nice</label>
        </p>
        <p>
          <input id="modifyRS" class="checkbox" type="checkbox" v-model="modifyRS">
          <label class="px-2" for="modifyRS">Modifier les liens des réseaux sociaux</label>
        </p>
        <p v-if="modifyRS" class="modifyRSinput pb-6">
          <input class="line" type="text" v-model="facebook" placeholder="facebook">
          <input class="line" type="text" v-model="instagram" placeholder="instagram">
          <input class="line" type="text" v-model="linkedin" placeholder="linkedin">
          <input class="line" type="text" v-model="youtube" placeholder="youtube">
        </p>
        <p>
          <button class="btn py-0 my-0" @click="doCopy">Copier la signature</button>
          <a class="py-0 my-0" @click="reset">Reset</a>
        </p>
      </div>

    </div>

    <div class="text-smaller text-info py-0 my-0">
      <p class="text-valid">{{message}}</p>
      <p v-if="htmlVersion" ref="copyRawHtml">{{$refs.copySignature.innerHTML}}</p>
    </div>
    <div class="py-0 my-0">
      <input id="checkHtml" class="checkbox" type="checkbox" v-model="htmlVersion">
      <label class="px-2" for="checkHtml">code HTML (pour Thunderbird)</label>
      <p><button v-if="htmlVersion" class="info btn my-2" @click="doCopyHtml">Copier le code HTML</button></p>
    </div>


  </div>
</template>

<script>

export default {
  name: 'Formulaire',
  props: {
    logoUrl: String,
    logoWidth: Number,
    padding: Number,
    // logoHeight: Number,
    color1: String,
    color2: String
  },
  data () {
    return {
      modifyRS: false,
      addressMars: true,
      addressNice: true,
      message: '',
      line1: '',
      line2: '',
      line3: '',
      line4: '',
      telephone1: '',
      telephone2: '',
      messageImp: '',
      urlImp: '',
      facebook: 'https://www.facebook.com/CentraleMediterranee',
      linkedin: 'https://www.linkedin.com/school/centralemediterranee/',
      instagram: 'https://www.instagram.com/centralemed/',
      youtube: 'https://www.youtube.com/user/CentraleMarseille/featured',
      copythis: Object,
      validated: false,
      htmlVersion: false,
      styleImg: 'font-family: sans-serif; color: #ffffff; font-size: 10px; display: block; border: 0px; margin-top: 3px; margin-right: 6px; padding-bottom: 5px; float: left;',
      styleArrow: 'color: #ffffff; height:10pt ; margin-top: 3px; margin-left: 6px; float: right;'
    }
  },
  computed: {
    path: function () {
      process.env.NODE_ENV === 'production'
          ? '/charte_graphique/'
          : '/'
    },
    style0: function () { // Bandeau important
      return 'padding: 4px 10px; margin: 0; font-size: 10pt; color: white; background-color:'+this.color1+'; font-family: Arial, sans-serif; font-weight: bold; margin-left:22px; width: fit-content;'
    },
    style1: function () {
      return 'padding: 0; margin: 0; font-size: 10pt; color:'+this.color1+'; font-family: Arial, sans-serif; padding-left: 22px; vertical-align: top;'
    },
    style2: function () {
      return 'padding: 0; margin: 0; font-size: 10pt; color:'+this.color2+'; font-family: Arial, sans-serif; padding-left: 22px; vertical-align: top;'
    },
    style3: function () {
      return 'padding: 0; margin: 0; font-size: 8pt; color:'+this.color2+'; font-family: Arial, sans-serif; padding-left: 22px; vertical-align: top;'
    },
    styleA1: function () {
      return 'color: '+this.color2+';'
    },
    styleA2: function () {
      return 'color: '+this.color1+';'
    },
    styleInputMessageImp: function () {
      return 'background-color: '+this.color1+'; color: white;'
    },
    absolutePath: function () {
      return 'https://outils.centrale-marseille.fr/signature/'
    },
    tel1: function () {
      return 'tel:' + this.telephone1.split(' ').join('')
    },
    tel2: function () {
      return 'tel:' + this.telephone2.split(' ').join('')
    },
    urlEncoded: function () {
      return encodeURI('line1=' + this.line1 + '&line2=' + this.line2 + '&line3=' + this.line3 + '&line4=' + this.line4 + '&telephone1=' + this.telephone1 + '&telephone2=' + this.telephone2 + '&message=' + this.messageImp  + '&urlmsg=' + this.urlImp + '&campus=' + (this.addressMars + 2*this.addressNice))
    }
  },
  mounted: function () {
    this.copythis = this.$refs.copythis
    this.line1 = this.$route.query.line1 ? this.$route.query.line1 : ''
    this.line2 = this.$route.query.line2 ? this.$route.query.line2 : ''
    this.line3 = this.$route.query.line3 ? this.$route.query.line3 : ''
    this.line4 = this.$route.query.line4 ? this.$route.query.line4 : ''
    this.telephone1 = this.$route.query.telephone1 ? this.$route.query.telephone1 : ''
    this.telephone2 = this.$route.query.telephone2 ? this.$route.query.telephone2 : ''
    this.messageImp = this.$route.query.message ? this.$route.query.message : ''
    this.urlImp = this.$route.query.urlmsg ? this.$route.query.urlmsg : ''
    this.$route.query.campus = '3'
    this.addressMars = this.$route.query.campus === '1' || this.$route.query.campus === '3'
    this.addressNice = this.$route.query.campus === '2' || this.$route.query.campus === '3'
  },
  watch: {
    urlEncoded: function () {
      this.$router.push({
        query: { line1: this.line1, line2: this.line2, line3: this.line3, line4: this.line4,
          telephone1: this.telephone1, telephone2: this.telephone2,
          message: this.messageImp, urlmsg: this.urlImp,
          campus: this.addressMars + 2*this.addressNice} }) // 0: no address, 1: mars, 2: nice, 3: both
    }
  },
  methods: {
    reset: function () {
      this.validated = false;
      this.line1= '';
      this.line2= '';
      this.line3= '';
      this.line4= '';
      this.telephone1= '';
      this.telephone2= '';
      this.copyMessage= '';
      this.message = '';
      this.messageImp = '';
      this.urlImp ='';
      this.campus = 3;
    },
    selectText(element) {
      let range;
      if (document.selection) {
        // IE
        range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
      } else if (window.getSelection) {
        range = document.createRange();
        range.selectNode(element);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
      }
    },
    doCopy: function () {
      this.validated = true;
      this.selectText(this.$refs.copySignature); // e.g. <div ref="text">
      document.execCommand("copy");
      this.message = 'signature copiée'
    },
    doCopyHtml: function () {
      this.validated = true;
      this.selectText(this.$refs.copyRawHtml);
      document.execCommand("copy");
      this.message = 'code html copié'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
input {
  background: #fff;
  border: 1px solid #eff0f4!important;
  padding: 15px;
}
.modifyRSinput input {
  width: 100%;
}

</style>
