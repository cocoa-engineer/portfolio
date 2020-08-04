<template>
  <v-app>
    <!-- スクロールしたらTopボタン表示 -->
    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      fab
      fixed
      bottom
      right
      color="gray"
      @click="toTop"
    >
      <v-icon>fas fa-angle-up</v-icon>
    </v-btn>
    <!-- Topボタンここまで -->
    <Home />
    <!-- スクロールしたらMenu固定 -->
    <div v-scroll="onScroll" :class="{ fixed: fab }">
      <AppNavigation />
    </div>
    <About />
    <portfolio />
    <Skill />
    <Contact />
    <!-- スクロールしたらFooter固定 -->
    <div v-scroll="onScroll" :class="{ footer: fab }">
      <Footer />
    </div>
  </v-app>
</template>

<script>
import AppNavigation from "@/components/AppNavigation";
import Footer from "@/components/Footer";
import Home from "@/views/Home";
import About from "@/views/About";
import Portfolio from "@/views/Portfolio";
import Skill from "@/views/Skill";
import Contact from "@/views/Contact";
export default {
  name: "App",
  components: {
    AppNavigation,
    Footer,
    Home,
    About,
    Portfolio,
    Skill,
    Contact
  },
  data: () => {
    return {
      fab: false
    };
  },
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 700;
    },
    toTop() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>
<style>
@import "assets/css/reset.css";
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
}
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
