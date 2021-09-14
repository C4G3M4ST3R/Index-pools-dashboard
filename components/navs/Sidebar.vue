<template>
  <div
    class="main-menu menu-fixed menu-light menu-accordion"
    data-scroll-to-active="true"
  >
    <div class="navbar-header mt-5 mb-3">
      <ul class="nav navbar-nav">
        <li class="nav-item">
          <nuxt-link class="navbar-brand" to="/">
            <div class="brand-logo d-flex w-100 justify-content-center">
              <img
                src="/img/logo.png"
                height="50"
                alt="logo"
                class="mr-2 rounded-circle"
              />
              <h2 class="text-dark mt-1">Cage</h2>
            </div>
          </nuxt-link>
        </li>
        <li class="nav-item nav-toggle d-none">
          <a class="nav-link modern-nav-toggle pr-0" data-toggle="collapse">
            <i
              class="feather icon-x d-block d-xl-none font-medium-4 primary toggle-icon"
            >
            </i>
          </a>
        </li>
      </ul>
    </div>

    <div class="shadow-bottom"></div>

    <div class="main-menu-content mt-5">
      <ul
        class="navigation navigation-main bg-transparent"
        id="main-menu-navigation"
        data-menu="menu-navigation"
      >
        <li class="nav-item">
          <nuxt-link to="/">
            <i class="feather icon-home mx-2"></i>
            <span class="ml-2 menu-title">Dashboard</span>
          </nuxt-link>
        </li>
        <!-- <li class="nav-item">
          <nuxt-link to="/C4G3">
            <img
              src="/img/logo.png"
              height="35"
              alt="logo"
              class="mr-2 rounded-circle"
            />
            <span class="ml-2 menu-title">C4G3</span>
          </nuxt-link>
        </li> -->

        <li class="nav-item">
          <nuxt-link to="/cmi">
            <img
              src="/img/logo-cmi.png"
              height="35"
              alt="logo"
              class="mr-2 rounded-circle"
            />
            <span class="menu-title">CMI</span>
          </nuxt-link>
        </li>

        <li class="nav-item ml-1">
          <change-theme class="ml-3" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ChangeTheme from '../utils/ChangeTheme.vue';
export default {
  components: { ChangeTheme },
};
</script>

<style scoped>
.main-menu.menu-light .navigation > li {
  padding: 0 20px;
  margin-bottom: 15px;
}

.main-menu.menu-light .navigation > li a {
  border-radius: 10px;
}

.main-menu.menu-light .navigation > li a i {
  font-size: 22px !important;
}

.main-menu.menu-light
  .navigation
  > li
  a.nuxt-link-exact-active.nuxt-link-active {
  background-color: var(--primary-color);
  color: #fff;
}

body.dark-layout
  .main-menu.menu-light
  .navigation
  > li
  a.nuxt-link-exact-active.nuxt-link-active
  span {
  color: #fff;
}

.main-menu.menu-light .navigation > li a:hover {
  background-color: #f2f2f3;
}

body.dark-layout .main-menu-content .navigation-main .nav-item i,
body.dark-layout .main-menu-content .navigation-main .nav-item span {
  color: #fff;
}

.dark-layout .main-menu.menu-light .navigation > li a:hover i,
.dark-layout .main-menu.menu-light .navigation > li a:hover span {
  color: #565656;
}
</style>
