<template>
  <div
    class="main-menu menu-fixed menu-light menu-accordion"
    data-scroll-to-active="true"
  >
    <div class="navbar-header my-3">
      <ul class="nav navbar-nav">
        <li class="nav-item">
          <nuxt-link class="navbar-brand" to="/">
            <div class="brand-logo d-flex w-100 justify-content-center">
              <img
                src="/img/logo-cmi.png"
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
        id="scroller"
        data-menu="menu-navigation"
      >
        <li class="nav-item">
          <nuxt-link to="/">
            <svg
              viewBox="0 0 24 24"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2"
            >
              <path
                d="M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.59997C12.29 3.25997 11.71 3.25997 11.33 3.59997L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z"
              ></path>
            </svg>
            <span class="ml-2 menu-title">Dashboard</span>
          </nuxt-link>
        </li>

        <li class="nav-item d-none">
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

        <li class="nav-item has-sub">
          <a href="#">
            <svg
              viewBox="0 0 24 24"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z"
              ></path>
            </svg>
            <span class="ml-2 menu-title">Trade</span>
          </a>
          <ul class="menu-content">
            <li>
              <nuxt-link to="#!">
                <span class="menu-item">
                  C4G3
                </span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="#!">
                <span class="menu-item">
                  CMI
                </span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="#!">
                <span class="menu-item">
                  CGT
                </span>
              </nuxt-link>
            </li>
          </ul>
        </li>

        <li class="nav-item">
          <nuxt-link to="/farms">
            <svg
              viewBox="0 0 24 24"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2"
            >
              <path
                d="M13.7803 2.71967C14.0732 3.01256 14.0732 3.48744 13.7803 3.78033L12.8107 4.75L14.0307 5.96999H20C21.1 5.96999 22 6.86999 22 7.96999V12.73C21.28 12.25 20.43 11.97 19.5 11.97C17.19 11.97 15.3 13.73 15.05 15.97H11.91C11.96 15.64 12 15.31 12 14.97C12 13.43 11.41 12.03 10.46 10.97H11C12.1 10.97 13 10.07 13 8.96999V7.06068L11.75 5.81066L10.7803 6.78033C10.4874 7.07322 10.0126 7.07322 9.71967 6.78033C9.42678 6.48744 9.42678 6.01256 9.71967 5.71967L12.7197 2.71967C13.0126 2.42678 13.4874 2.42678 13.7803 2.71967Z"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11 15C11 17.7614 8.76142 20 6 20C3.23858 20 1 17.7614 1 15C1 12.2386 3.23858 10 6 10C8.76142 10 11 12.2386 11 15ZM9 15C9 16.6569 7.65685 18 6 18C4.34315 18 3 16.6569 3 15C3 13.3431 4.34315 12 6 12C7.65685 12 9 13.3431 9 15Z"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.5 12.97C17.57 12.97 16 14.54 16 16.47C16 18.4 17.57 19.97 19.5 19.97C21.43 19.97 23 18.4 23 16.47C23 14.54 21.43 12.97 19.5 12.97ZM19.5 17.97C18.67 17.97 18 17.3 18 16.47C18 15.64 18.67 14.97 19.5 14.97C20.33 14.97 21 15.64 21 16.47C21 17.3 20.33 17.97 19.5 17.97Z"
              ></path>
              <path
                d="M9 8.96997H4C3.45 8.96997 3 8.52997 3 7.96997C3 7.41997 3.45 6.96997 4 6.96997H7C8.1 6.96997 9 7.86997 9 8.96997Z"
              ></path>
            </svg>
            <span class="menu-title ml-2">Farms</span>
          </nuxt-link>
        </li>

        <li class="nav-item">
          <nuxt-link to="/pools">
            <svg
              viewBox="0 0 24 24"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2"
            >
              <path
                d="M7.5 13C7.5 11.8954 8.39543 11 9.5 11H12.5C13.6046 11 14.5 11.8954 14.5 13V15C14.5 16.1046 13.6046 17 12.5 17H9.5C8.39543 17 7.5 16.1046 7.5 15V13Z"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.5 2C8.39543 2 7.5 2.89543 7.5 4V6.49482C7.5 6.93167 7.2113 7.30895 6.81834 7.49981C5.15004 8.31009 4 10.0207 4 12V17C4 19.2091 5.79086 21 8 21H14C16.2091 21 18 19.2091 18 17V12C18 11.4175 17.9004 10.8583 17.7173 10.3385L17.7892 10.297C19.4786 9.32167 20.0574 7.16153 19.082 5.47221C18.1552 3.86682 16.1534 3.25957 14.5 4.05146V4C14.5 2.89543 13.6046 2 12.5 2H9.5ZM9.5 6.25V4H12.5V6.25H9.5ZM9.22663 7.75C8.89473 8.46917 8.30318 9.00205 7.69211 9.29884C6.68638 9.78731 6 10.8154 6 12V17C6 18.1046 6.89543 19 8 19H14C15.1046 19 16 18.1046 16 17V12C16 10.8154 15.3136 9.78731 14.3079 9.29884C13.6968 9.00205 13.1053 8.46917 12.7734 7.75H9.22663ZM14.5 6.3226V6.49482C14.5 6.93167 14.7887 7.30895 15.1817 7.49981C15.7529 7.77726 16.2634 8.16029 16.6878 8.62352L16.7892 8.56495C17.522 8.1419 17.773 7.20495 17.35 6.47221C16.9346 5.75269 16.0213 5.49542 15.2914 5.89229L14.5 6.3226Z"
              ></path>
            </svg>
            <span class="ml-2 menu-title">Staking</span>
          </nuxt-link>
        </li>

 
        <li class="nav-item">
          <nuxt-link to="/pools">
            <svg
              viewBox="0 0 24 24"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2"
            >
              <path
                d="M7.5 13C7.5 11.8954 8.39543 11 9.5 11H12.5C13.6046 11 14.5 11.8954 14.5 13V15C14.5 16.1046 13.6046 17 12.5 17H9.5C8.39543 17 7.5 16.1046 7.5 15V13Z"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.5 2C8.39543 2 7.5 2.89543 7.5 4V6.49482C7.5 6.93167 7.2113 7.30895 6.81834 7.49981C5.15004 8.31009 4 10.0207 4 12V17C4 19.2091 5.79086 21 8 21H14C16.2091 21 18 19.2091 18 17V12C18 11.4175 17.9004 10.8583 17.7173 10.3385L17.7892 10.297C19.4786 9.32167 20.0574 7.16153 19.082 5.47221C18.1552 3.86682 16.1534 3.25957 14.5 4.05146V4C14.5 2.89543 13.6046 2 12.5 2H9.5ZM9.5 6.25V4H12.5V6.25H9.5ZM9.22663 7.75C8.89473 8.46917 8.30318 9.00205 7.69211 9.29884C6.68638 9.78731 6 10.8154 6 12V17C6 18.1046 6.89543 19 8 19H14C15.1046 19 16 18.1046 16 17V12C16 10.8154 15.3136 9.78731 14.3079 9.29884C13.6968 9.00205 13.1053 8.46917 12.7734 7.75H9.22663ZM14.5 6.3226V6.49482C14.5 6.93167 14.7887 7.30895 15.1817 7.49981C15.7529 7.77726 16.2634 8.16029 16.6878 8.62352L16.7892 8.56495C17.522 8.1419 17.773 7.20495 17.35 6.47221C16.9346 5.75269 16.0213 5.49542 15.2914 5.89229L14.5 6.3226Z"
              ></path>
            </svg>
            <span class="ml-2 menu-title">Crucible(Rewards)</span>
          </nuxt-link>
        </li>
    

        <li class="nav-item has-sub">
          <a href="#">
            <svg
              viewBox="0 0 24 24"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2"
            >
              <path
                d="M3,4H7V8H3V4M9,5V7H21V5H9M3,10H7V14H3V10M9,11V13H21V11H9M3,16H7V20H3V16M9,17V19H21V17H9"
              ></path>
            </svg>

            <span class="ml-2 menu-title">Balancer Pools</span>
          </a>
          <ul class="menu-content">
            <li>
              <nuxt-link to="#!">
                <span class="menu-item">
                  List
                </span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="#!">
                <span class="menu-item">
                  List
                </span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="#!">
                <span class="menu-item">
                  List
                </span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="#!">
                <span class="menu-item">
                  List
                </span>
              </nuxt-link>
            </li>
          </ul>
        </li>

        <!-- <li class="nav-item has-sub">
          <a href="#">
            <svg
              viewBox="0 0 24 24"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2"
            >
              <path
                d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
              ></path>
            </svg>

            <span class="ml-2 menu-title">More</span>
          </a>
          <ul class="menu-content">
            <li>
              <nuxt-link to="#!">
                <span class="menu-item">
                  List
                </span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="#!">
                <span class="menu-item">
                  List
                </span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="#!">
                <span class="menu-item">
                  List
                </span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="#!">
                <span class="menu-item">
                  List
                </span>
              </nuxt-link>
            </li>
          </ul>
        </li> -->
      </ul>

      <div class="footer-bottom p-4">
        <ul class="socials d-inline-flex mt-3">
          <li class="mr-3">
            <a href="#">
              <svg
                viewBox="0 0 24 24"
                width="22px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z"
                ></path>
              </svg>
            </a>
          </li>
          <li class="mr-3">
            <a href="#">
              <svg
                viewBox="0 0 24 24"
                width="22px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.65854 19C15.4488 19 19.1659 13.2338 19.1659 8.23717C19.1659 8.07728 19.1659 7.91739 19.1561 7.7475C19.878 7.21785 20.5024 6.5483 21 5.78881C20.3366 6.08861 19.6244 6.28847 18.8732 6.38841C19.6341 5.91872 20.2195 5.17921 20.5024 4.28981C19.7902 4.72951 19 5.03931 18.1512 5.20919C17.478 4.45969 16.522 4 15.4585 4C13.4195 4 11.761 5.69887 11.761 7.78747C11.761 8.08728 11.8 8.36709 11.8585 8.6469C8.79512 8.497 6.07317 6.97801 4.24878 4.68954C3.92683 5.25916 3.75122 5.90873 3.75122 6.59827C3.75122 7.90739 4.40488 9.06662 5.39024 9.74617C4.78537 9.72618 4.21951 9.5563 3.72195 9.27648C3.72195 9.28648 3.72195 9.30646 3.72195 9.32645C3.72195 11.1552 5 12.6942 6.67805 13.034C6.36585 13.1239 6.0439 13.1639 5.70244 13.1639C5.46829 13.1639 5.23415 13.1439 5.00976 13.0939C5.47805 14.6029 6.8439 15.6922 8.46341 15.7222C7.19512 16.7415 5.60488 17.3411 3.87805 17.3411C3.58537 17.3411 3.28293 17.3311 3 17.2911C4.62927 18.3704 6.57073 19 8.65854 19Z"
                ></path>
              </svg>
            </a>
          </li>
          <li class="mr-3">
            <a href="#">
              <svg
                viewBox="0 0 24 24"
                width="22px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m7.996 21.324c0 .695-.521.982-1.098.695l-6.228-3.113c-.188-.089-.346-.238-.475-.447s-.195-.417-.195-.622v-15.227c0-.568.341-.825 1.112-.441l6.844 3.42c.099.099.026-.581.04 15.735zm.857-14.32 7.152 11.568-7.152-3.553zm15.147.241v14.079c0 .223-.062.403-.188.541-.125.138-.295.207-.509.207s-.424-.058-.629-.174l-5.906-2.939zm-.04-1.603c0 .027-1.145 1.895-3.435 5.603s-3.632 5.88-4.025 6.512l-5.223-8.469 4.339-7.039c.236-.388.72-.456 1.045-.294l7.246 3.607c.035.017.053.044.053.08z"
                ></path>
              </svg>
            </a>
          </li>
          <li class="mr-3">
            <a href="#">
              <svg
                viewBox="0 0 24 24"
                width="22px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 3C7.02985 3 3 7.02985 3 11.9904C3 16.9606 7.02985 21 12 21C16.9701 21 21 16.9606 21 11.9904C21 7.02985 16.9701 3 12 3ZM16.4328 8.65139C16.3753 9.48614 14.8305 15.7228 14.8305 15.7228C14.8305 15.7228 14.7345 16.0874 14.3987 16.097C14.2836 16.097 14.1301 16.0874 13.9574 15.9243C13.6023 15.6269 12.7964 15.0512 12.0384 14.5235C12.0096 14.5522 11.9808 14.581 11.9424 14.6098C11.7697 14.7633 11.5107 14.984 11.2324 15.2527C11.1269 15.3486 11.0117 15.4542 10.8966 15.5693L10.887 15.5789C10.8198 15.6461 10.7623 15.694 10.7143 15.7324C10.3401 16.0394 10.3017 15.7804 10.3017 15.6461L10.5032 13.4488V13.4296L10.5128 13.4104C10.5224 13.3817 10.5416 13.3721 10.5416 13.3721C10.5416 13.3721 14.4659 9.87953 14.5714 9.50533C14.581 9.48614 14.5522 9.46695 14.5043 9.48614C14.2452 9.57249 9.72601 12.4318 9.22708 12.7484C9.19829 12.7676 9.11194 12.758 9.11194 12.758L6.91471 12.0384C6.91471 12.0384 6.65565 11.9328 6.742 11.693C6.76119 11.645 6.78998 11.597 6.89552 11.5299C7.38486 11.1844 15.8955 8.12367 15.8955 8.12367C15.8955 8.12367 16.1354 8.04691 16.2793 8.09488C16.3465 8.12367 16.3849 8.15245 16.4232 8.2484C16.4328 8.28678 16.4424 8.36354 16.4424 8.44989C16.4424 8.49787 16.4328 8.55544 16.4328 8.65139Z"
                ></path>
              </svg>
            </a>
          </li>
          <li class="ml-5">
            <change-theme />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ChangeTheme from '../utils/ChangeTheme.vue';
export default {
  components: { ChangeTheme },
  mounted() {
    $('.has-sub').on('click', function(e) {
      e.preventDefault();
      console.log(this);
      var $listItem = $(this);

      if ($listItem.is('.open')) {
        $listItem.removeClass('open');
      } else {
        $listItem.addClass('open');
      }
    });
  },
};
</script>

<style scoped>
.main-menu.menu-light .navigation {
  max-height: 65vh;
  overflow-y: scroll;
}

.main-menu.menu-light .navigation > li {
  padding: 0 20px;
  margin-bottom: 15px;
}

.main-menu.menu-light .navigation > li a {
  border-radius: 10px;
}

.main-menu.menu-light .socials li a i,
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

.main-menu.menu-light
  .navigation
  > li
  a.nuxt-link-exact-active.nuxt-link-active
  svg,
body.dark-layout
  .main-menu.menu-light
  .navigation
  > li
  a.nuxt-link-exact-active.nuxt-link-active
  svg {
  fill: #fff;
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

.main-menu.menu-light .navigation > li > ul {
  background: #f1f2f3;
  border-top: 1px solid #dadada;
  border-bottom: 1px solid #dadada;
  margin: 0 !important;
  padding-left: 20px;
  /* max-height: 96px; */
}

.main-menu.menu-light .navigation > li.nav-item.has-sub {
  position: relative;
}

.main-menu.menu-light .navigation > li.nav-item svg {
  fill: #565656;
}

body.dark-layout .main-menu.menu-light .socials li a svg,
body.dark-layout .main-menu.menu-light .navigation > li.nav-item svg {
  fill: #fff;
}

.main-menu.menu-light .navigation > li.nav-item.has-sub:after {
  font-family: feather;
  content: '\e842';
  position: absolute;
  right: 30px;
  top: 5px;
  font-weight: 600;
}

.main-menu.menu-light .navigation > li.nav-item.has-sub.open:after {
  content: '\e845';
}

.main-menu.menu-light .navigation > li.nav-item.has-sub > ul {
  transition: all 0.35s ease 0.35s !important;
}

body.dark-layout .coin-price p,
body.dark-layout .main-menu.menu-light .socials li a i,
body.dark-layout .main-menu.menu-light .navigation > li.nav-item.has-sub:after,
body.dark-layout .main-menu-content .navigation-main .nav-item i,
body.dark-layout .main-menu-content .navigation-main .nav-item span {
  color: #fff;
}

.dark-layout
  .main-menu.menu-light
  .navigation
  > li.nav-item.has-sub:hover:after,
.dark-layout .main-menu.menu-light .navigation > li a:hover i,
.dark-layout .main-menu.menu-light .navigation > li a:hover span {
  color: #565656;
}

.dark-layout .main-menu.menu-light .navigation > li a:hover svg {
  fill: #565656;
}

.coin-price {
  max-width: 150px;
}

.coin-price p {
  color: #565656;
  font-size: 24px;
}

.coin-price:hover img {
  transform: scale(1.25);
}
</style>
