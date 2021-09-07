<template>
  <nav
    class="header-navbar navbar-expand-lg navbar navbar-with-menu floating-nv navbar-light navbar-shadow d-xl-none mx-4 my-3 mx-md-5 rounded-lg"
  >
    <div class="navbar-wrapper">
      <div class="navbar-container content px-0">
        <div
          class="navbar-collapse d-flex justify-content-between"
          id="navbar-mobile"
        >
          <ul class="nav navbar-nav bookmark-icons mt-1">
            <li class="nav-item">
              <nuxt-link class="navbar-brand py-0" to="/dashboard">
                <div class="brand-logo d-flex w-100 justify-content-center">
                  <img
                    src="/img/logo.png"
                    height="45"
                    alt="logo"
                    class="mr-1 rounded-circle"
                  />
                  <h3 class="mt-2">Cage</h3>
                </div>
              </nuxt-link>
            </li>
          </ul>

          <ul class="nav navbar-nav mt-1 mr-2">
            <li class="nav-item">
              <change-theme />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import ChangeTheme from '../utils/ChangeTheme.vue';
export default {
  components: { ChangeTheme },
  methods: {
    changeMode(event) {
      this.$store.commit('set', { darkMode: event.target.checked });
    },
  },
  computed: {
    userRole() {
      return this.getAdminLevel(this.user.role);
    },
    userImg() {
      return this.isSuperAdmin ? '/img/super-admin.svg' : '/img/user.svg';
    },
  },
};
</script>

<style scoped>
.header-navbar .navbar-container {
  padding-left: 1rem !important;
  padding-right: 1rem !important;
}
</style>
