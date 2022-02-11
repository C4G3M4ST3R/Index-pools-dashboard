<template>
  <div class="main">
    <Sidebar class="ash-bg" />
    <Navbar class="ash-bg" />

    <div
      class="app-content content"
      :class="{ 'ash-bg': $route.name === 'dashboard' }"
    >
      <div class="content-overlay"></div>
      <div class="content-wrapper mt-4">
        <div class="content-header row"></div>
        <div class="content-body pb-4">
          <Nuxt />
        </div>
      </div>
    </div>

    <div class="sidenav-overlay" @click="toggleMobileMenu"></div>
    <div class="drag-target"></div>

    <connect-wallet :key="connectKey + 'e'" @close.once="connectKey++" />
  </div>
</template>
<script>
import Navbar from '../components/navs/Navbar.vue';
import Sidebar from '../components/navs/Sidebar.vue';
import ConnectWallet from '../components/utils/ConnectWallet';

export default {
  head() {
    const { darkMode } = this.$store.state;
    return {
      bodyAttrs: {
        class: `vertical-layout navbar-floating footer-static pace-done ${darkMode &&
          'dark-layout'} ${this.menuClasses}`,
      },
    };
  },
  components: { Sidebar, Navbar, ConnectWallet },
  data() {
    return {
      connectKey: 42,
      menuClasses: '',
    };
  },
  mounted() {
    let throttlePause;

    const throttle = (callback, time) => {
      //don't run the function if throttlePause is true
      if (throttlePause) return;

      //set throttlePause to true after the if condition. This allows the function to be run once
      throttlePause = true;

      //setTimeout runs the callback within the specified time
      setTimeout(() => {
        callback();

        //throttlePause is set to false once the function has been called, allowing the throttle function to loop
        throttlePause = false;
      }, time);
    };

    const toggleMenu = () => {
      var width = window.innerWidth > 0 ? window.innerWidth : screen.width;

      if (width < 1200) {
        this.menuClasses = 'vertical-overlay-menu menu-hide';
      } else {
        this.menuClasses = 'vertical-menu-modern menu-expanded';
      }
    };

    window.addEventListener('resize', () => throttle(toggleMenu, 100));

    toggleMenu();
  },
};
</script>

<style scoped>
.app-content {
  min-height: 100vh;
  /* overflow: hidden auto; */
}

.ash-bg {
  background-color: #f7f8fb;
}

.dark-layout .ash-bg {
  background-color: #10163ad1;
}

.dark-layout .main {
  background-image: url('/img/illustrations/landed-2.png');
  background-image: linear-gradient(to bottom, #262c4999, #414561b5),
    url('/img/illustrations/landed-2.png');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
