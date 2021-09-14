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

    <div class="sidenav-overlay"></div>
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
        class: `vertical-layout vertical-menu-modern navbar-floating footer-static 2-columns ${darkMode &&
          'dark-layout'}`,
      },
    };
  },
  components: { Sidebar, Navbar, ConnectWallet },
  data() {
    return {
      connectKey: 42,
    };
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
  background-image: url('/img/illustrations/landed-2.jpeg');
  background-image: linear-gradient(to bottom, #262c4999, #414561b5),
    url('/img/illustrations/landed-2.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
