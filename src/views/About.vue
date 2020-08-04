<template>
  <div class="about" id="about">
    <h1>About ME</h1>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="auto" class="about-img">
          <FadeRight>
            <v-avatar size="240">
              <v-img :src="imageURL" aspect-ratio="1" light></v-img>
            </v-avatar>
          </FadeRight>
        </v-col>
        <v-col cols="12" md="auto">
          <FadeLeft>
            <h2 class="mb-5">Hironori Tanimoto</h2>
            <article>
              島根県生まれ。
              <br />フルリモートでRailsをメインとしたサーバーサイドのエンジニアとして働いています。
              <br />趣味は<a href="https://thejunkcocoa.com/" target="_blank"
                >音楽活動</a
              >。
              <br />現在、フロントエンドやクラウド関連の副業案件を探しています。
              <br />お仕事のご依頼・ご相談等につきましては、<a
                @click="$vuetify.goTo('#contact', options)"
                >こちら</a
              >から。
            </article>
          </FadeLeft>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import FadeRight from "@/components/FadeRight";
import FadeLeft from "@/components/FadeLeft";
export default {
  data() {
    return {
      imageURL: require("@/assets/img/me.jpg")
    };
  },
  components: {
    FadeRight,
    FadeLeft
  }
};
</script>
<style scoped>
#about {
  width: 100%;
  padding-top: 200px;
  padding-bottom: 200px;
}
#about h1 {
  font-size: 2em;
  text-align: center;
}
#about h2 {
  font-size: 1.5em;
  letter-spacing: 0.1em;
  line-height: 1.8;
}
#about article {
  letter-spacing: 0.1em;
  line-height: 1.8;
}
.fadeIn {
  animation: fadeIn 2s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
a {
  text-decoration: none;
}
/* レスポンシブ */
@media screen and (max-width: 425px) {
  .about-img {
    text-align: center;
  }
  #about h2 {
    text-align: center;
  }
}
</style>
