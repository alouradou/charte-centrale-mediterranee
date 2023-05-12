<template>


    <div class="formulaire py-0 my-0">
      <div v-if="asso==='bde'" class="resultat" ref="copySignature" style="padding:10px;">
        <bde :asso="asso" :data="data"></bde>
      </div>
      <div v-if="asso==='bds'" class="resultat" ref="copySignature" style="padding:10px;">
        <bds :asso="asso" :data="data"></bds>
      </div>
      <div v-else-if="asso==='foceen'" class="resultat" ref="copySignature" style="padding:10px;">
        <foceen :asso="asso" :data="data"></foceen>
      </div>
    </div>

    <div class="champs py-0 my-0">
      <p>
        <label class="px-2" for="selectAsso">Template : </label>
        <select name="asso" id="selectAsso" style="vertical-align:baseline;" v-model="asso">
          <option disabled value="">Choisir une association</option>
          <option value="bde">BDE</option>
          <option value="bds">BDS</option>
          <option value="foceen">FOCEEN</option>
          <option value="uaecm">UA</option>
          <option value="tribune">La Tribune</option>
          <option value="ginfo">GInfo</option>
          <option value="isf">ISF</option>
        </select>
      </p>
      <p>
        <input id="modifyPersonalisation" class="checkbox" type="checkbox" v-model="modifyPersonalisation">
        <label class="px-2" for="modifyPersonalisation">Personnaliser le template</label>
      </p>
      <p v-if="modifyPersonalisation" class="modifyRSinput pb-6">
        <input class="line" type="url" v-model="logo" placeholder="Lien du logo">
        <input class="line" type="text" v-model="mainColor" placeholder="Couleur principale">
      </p>
      <p class="modifyRSinput pb-6">
        <input class="line" type="text" v-model="line1" placeholder="Prénom & Nom">
        <input class="line" type="text" v-model="line2" placeholder="Poste">
        <input class="line" type="text" v-model="line3" placeholder="Ligne 2">
        <input class="line" type="tel" v-model="telephone1" placeholder="Téléphone">
      </p>
      <div>
        <p>
          <input id="modifyRS" class="checkbox" type="checkbox" v-model="modifyRS">
          <label class="px-2" for="modifyRS">Personnaliser les liens des icones</label>
        </p>
        <p v-if="modifyRS" class="modifyRSinput pb-6">
          <span>⚠️ N'oubliez pas le "https://" !!</span>
          <input class="line" type="url" v-model="facebook" placeholder="Facebook">
          <input class="line" type="url" v-model="website" placeholder="Site Web">
          <input class="line" type="email" v-model="mail" placeholder="Mail">
          <input class="line" type="url" v-model="linkedin" placeholder="Linkedin">
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


</template>

<script>
import Foceen from "@/components/templates-asso/foceen.vue";
import Bde from "@/components/templates-asso/bde.vue";
import Bds from "@/components/templates-asso/bds.vue";
import TemplateAsso from "@/components/template-asso.vue";
// import here the new templates


export default {
  name: 'Formulaire',
  components: {TemplateAsso, Bde, Foceen, Bds}, // add here the new templates
  data () {
    return {
      modifyRS: false,
      modifyPersonalisation:false,
      message: '',
      asso:'bde',
      line1: 'Prénom Nom',
      line2: 'Poste',
      line3: '',
      mainColor: '',
      telephone1: '',
      logo: '',
      facebook: '',
      website: '',
      linkedin: '',
      mail: '',
      youtube: '',
      copythis: Object,
      validated: false,
      htmlVersion: false,
      styleImg: '',
      style1: '',
      style2: '',
      style3: '',
      data:{}
    }
  },
  computed: {
    absolutePath: function () {
      return ''
    },
    tel1: function () {
      let l = this.telephone1.split(' ').join('')
      if (l[0] === "0") {
        l = l.substring(1, 10)
        let tel_formatted2 = "+33" + l
        return 'tel:' + tel_formatted2
      }
      else if (l.substring(0,3) === "+33") {
        let tel_formatted2 = "+33" + l.substring(3,12)
        return 'tel:' + tel_formatted2
      }
      else {
        return l
      }
    },
    tel2: function () {
      return 'tel:' + this.logo.split(' ').join('')
    },
    tel1_formatted: function format_tel(){
      let l =  this.telephone1.split(' ').join('')
      let tel_formatted1 = ""
      if (l[0] === "0"){
        l = l.substring(1,10)
        tel_formatted1 = "+33 (0)" + l.substring(0,1) + " " + l.substring(1,3) + " "+ l.substring(3,5) + " " + l.substring(5,7) + " " + l.substring(7,9) + " " + l.substring(9,11)
        return tel_formatted1
      }
      else if (l.substring(0,3) === "+33") {
        tel_formatted1 = "+33 (0)" + l.substring(3,4) + " " + l.substring(4,6) + " " + l.substring(6,8) + " " + l.substring(8,10) + " " + l.substring(10,12)
        return tel_formatted1
      }
      else {
        return l
      }
    },
    urlEncoded: function () {
      return encodeURI('line1=' + this.line1 + '&line2=' + this.line2 + '&line3=' + this.line3 + '&telephone1=' + this.telephone1 + '&asso=' + this.asso)
    }
  },
  mounted: function () {
    this.copythis = this.$refs.copythis
    this.asso = this.$route.query.asso ? this.$route.query.asso : ''
    this.line1 = this.$route.query.line1 ? this.$route.query.line1 : ''
    this.line2 = this.$route.query.line2 ? this.$route.query.line2 : ''
    this.line3 = this.$route.query.line3 ? this.$route.query.line3 : ''
    this.mainColor = this.$route.query.mainColor ? this.$route.query.mainColor : ''
    this.telephone1 = this.$route.query.telephone1 ? this.$route.query.telephone1 : ''
    this.logo = this.$route.query.logo ? this.$route.query.logo : ''
    this.setCompteur()
  },
  watch: {
    urlEncoded: function () {
      if (this.asso === "ginfo") {
        this.mainColor = '#44AC34'
        this.website = "https://ginfo.asso.centrale-marseille.fr/"
        this.mail = "ginfo@centrale-marseille.fr"
        this.linkedin = ""
      }
      else if (this.asso === "bde") {
        this.logo = "http://alouradou.perso.centrale-marseille.fr/images/signature_logo_bde.png"
        this.mainColor = 'rgb(42,97,168)'
        this.facebook = "https://www.facebook.com/bdecentralemarseille/"
        this.website = "https://bde.asso.centrale-marseille.fr/"
        this.mail = "bde@centrale-marseille.fr"
        this.linkedin = "https://www.linkedin.com/company/bdeecm/"
      }
      else if (this.asso === "uaecm"){
        this.logo = "https://zupimages.net/up/20/06/7qb4.png"
        this.mainColor = ''
        this.facebook = "https://www.facebook.com/ua.centrale.marseille/"
        this.website = "https://uaecm.asso.centrale-marseille.fr/"
        this.mail = "uaecm@centrale-marseille.fr"
        this.linkedin = "https://www.linkedin.com/in/union-des-associations-6a0160185/"
      }
      else if (this.asso === "bds"){
        this.logo = "http://alouradou.perso.centrale-marseille.fr/images/LOGO_BDS_.png"
        this.mainColor = '#1A2248'
        this.facebook = "https://www.facebook.com/bdscentralemarseille"
        this.website = "https://bds.asso.centrale-marseille.fr/"
        this.mail = "bds@centrale-marseille.fr"
        this.linkedin = "https://www.linkedin.com/company/bds-centrale-marseille"
      }
      else if (this.asso === "tribune"){
        this.logo = "http://alouradou.perso.centrale-marseille.fr/images/Logo_Tribune_ECM_mail.png"
        this.mainColor = 'rgb(62,113,147)'
        this.facebook = "https://www.facebook.com/tribunecm"
        this.website = ""
        this.mail = ""
        this.linkedin = ""
      }
      else if (this.asso === "foceen"){
        this.logo = "http://alouradou.perso.centrale-marseille.fr/images/foceen/logo.png"
        this.mainColor = '#1A3745'
        this.facebook = "https://www.facebook.com/FOCEEN"
        this.website = "https://foceen-centrale-marseille.fr/"
        this.mail = "forumentreprises@centrale-marseille.fr"
        this.linkedin = "https://www.linkedin.com/company/forum-centrale-marseille-entreprises"
      }
      else { this.mainColor = '#00000' }

      this.data = {
        line1: this.line1,
        line2: this.line2,
        line3: this.line3,
        mainColor: this.mainColor,
        telephone1: this.telephone1,
        tel1_formatted: this.tel1_formatted,
        logo: this.logo,
        asso: this.asso,
        facebook: this.facebook,
        website: this.website,
        mail: this.mail,
        linkedin: this.linkedin
      }

      this.$router.push({ query: { line1: this.line1, line2: this.line2, line3: this.line3, mainColor: this.mainColor, telephone1: this.telephone1, logo: this.logo, asso: this.asso } })
    }
  },
  methods: {
    reset: function () {
      this.validated = false;
      this.line1= '';
      this.line2= '';
      this.line3= '';
      this.mainColor= '';
      this.telephone1= '';
      this.logo= '';
      this.copyMessage= '';
      this.message = ''
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
    },
    setCompteur: function () {
      fetch("./compteur.php")
          .then((result) => { return result.json() })
          .then(res => { document.getElementById("compteur").innerText = res.compte + ' personnes ont déjà crée leur signature avec cet outil !' })
          .catch(res => { console.log('Fetch error : ' + res) })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
input {
  background: #fff;
  border: 1px solid #eff0f4!important;
  padding: 15px;
}
.modifyRSinput input {
  width: 100%;
}
iframe.youtube{
  width: 560px;
  height: 315px;
}

</style>
