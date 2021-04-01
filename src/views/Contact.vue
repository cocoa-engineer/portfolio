<template>
  <div class="contact" id="contact">
    <h1>Contact</h1>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <article>
            React, Vue.js, AWSの副業案件を募集しています。
            <br />本業がフルタイム勤務のため、週10〜15時間程度でアサインできる案件を希望いたします。
            <br />お仕事のご依頼・ご相談等につきましては、右記お問い合わせフォームまたはTwitterのDMからお願いいたします。
          </article>
        </v-col>
        <v-col cols="12" md="6">
          <ContactForm />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import ContactForm from "@/components/ContactForm.vue";
export default {
  name: "contact",
  components: {
    ContactForm
  }
};
</script>
<style scoped>
#contact {
  width: 100%;
  background-color: #eaeae0;
  background-blend-mode: lighten;
  position: relative;
  padding: 130px 0;
}
#contact h1 {
  width: 100%;
  font-size: 2em;
  text-align: center;
}
#contact article {
  letter-spacing: 0.1em;
  line-height: 2;
  margin-top: 70px;
}
</style>
