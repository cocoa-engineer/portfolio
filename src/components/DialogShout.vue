<template>
  <div>
    <v-dialog v-model="dialogShout" width="500">
      <v-card>
        <v-card-title>shout</v-card-title>
        <v-card-text>
          心の声を思いっきり叫ぶアプリです。
          <br />
          <br />開発環境
          <ul>
            <li>OS : mac</li>
            <li>言語 : HTML, CSS, JavaScript, Ruby</li>
            <li>フレームワーク : Ruby on Rails</li>
            <li>インフラ : Docker, CircleCI, Heroku</li>
          </ul>
        </v-card-text>
        <v-card-actions>
          <a
            href="https://sns-shout.herokuapp.com/"
            target="_blank"
            class="btn btn-malformation"
            >アプリを見る</a
          >

          <v-spacer></v-spacer>

          <v-btn color="primary" text @click="dialogShout = false"
            >閉じる</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogShout: false
    };
  },
  methods: {
    open() {
      this.dialogShout = true;
    },
    close() {
      this.dialogShout = false;
    }
  }
};
</script>
<style scoped>
*,
*:before,
*:after {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
}
html {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 62.5%;
}
.btn,
a.btn,
button.btn {
  font-size: 0.9rem;
  font-weight: 700;
  position: relative;
  display: inline-block;
  padding: 0.7rem 1.5rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  letter-spacing: 0.1em;
  color: #212529;
  border-radius: 0.5rem;
}
a.btn-malformation {
  font-size: 0.9rem;
  padding: 0.7rem 1.5rem;
  color: #fff;
  border-radius: 100% 80px / 80px 100%;
  background-color: #6ec4ff;
}
a.btn-malformation:hover {
  color: #fff;
  border-radius: 60% 80% / 100% 80%;
}
</style>
