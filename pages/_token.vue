<template>
  <main>
    <div class="container">
      <div class="text-right">
        <button class="btn-grey px-4 py-2 text-white">
          Connect Wallet
        </button>
      </div>

      <nav
        aria-label="breadcrumbs"
        class="has-succeeds-separator breadcrumb border-0 my-5"
      >
        <ul>
          <li>
            <nuxt-link
              to="/dashboard"
              class="is-capitalized nuxt-link-active mr-2"
            >
              Dashboard
            </nuxt-link>
          </li>
          <li class="is-active text-uppercase text-black">
            {{ token }}
          </li>
        </ul>
      </nav>

      <div class="d-flex">
        <div class="mr-1">
          <img :src="`/img/tokens/${token.toLowerCase()}.png`" height="60" />
        </div>
        <div>
          <h4 class="text-uppercase pt-1 mt-3">{{ token }}</h4>
          <p></p>
        </div>
      </div>

      <div class="row">
        <div class="col-md-9 col-12">
          <hr />

          <div class="d-flex justify-content-between my-5 pt-5">
            <div>
              <h1 class="coin-price mb-0">
                $7.1073
              </h1>
              <p class="text-success" style="font-size: 1.25rem;">
                <span class="mr-2">
                  $0.44240 (6.6378%)
                </span>
                <span>
                  {{ currentRange }}
                  <i class="feather icon-arrow-up-right"></i>
                </span>
              </p>
            </div>

            <div>
              <ul class="nav">
                <template v-for="range in ['1WK', '1M', '3M', '6M', '1Y']">
                  <li
                    class="nav-item mr-3"
                    :key="range"
                    :class="{ 'active px-3': currentRange === range }"
                  >
                    <button
                      class="nav-link bg-transparent p-0"
                      @click.prevent="currentRange = range"
                    >
                      {{ range }}
                    </button>
                  </li>
                </template>
              </ul>
            </div>
          </div>

          <div class="chart">
            <chart />
          </div>

          <div class="py-5">
            <!-- Nav tabs -->
            <ul class="nav nav-tabs nav-fill" id="myTab" role="tablist">
              <template v-for="tab in tabs">
                <li class="nav-item" :key="tab">
                  <a
                    class="nav-link text-capitalize"
                    :class="{ active: currentTab === tab }"
                    :id="`${tab}-tab-fill`"
                    data-toggle="tab"
                    :href="`#${tab}-fill`"
                    role="tab"
                    @click.prevent="currentTab = tab"
                    :aria-controls="`${tab}-fill`"
                    :aria-selected="currentTab === tab"
                  >
                    {{ formatTitle(tab) }}
                  </a>
                </li>
              </template>
            </ul>

            <!-- Tab panes -->
            <div class="tab-content pt-1">
              <div
                class="tab-pane active"
                :id="`${currentTab}-fill`"
                role="tabpanel"
                :aria-labelledby="`${currentTab}-tab-fill`"
              >
                <component :is="currentComponent"></component>
              </div>
              <div
                class="tab-pane"
                id="messages-fill"
                role="tabpanel"
                aria-labelledby="messages-tab-fill"
              >
                <p>
                  Croissant jelly tootsie roll candy canes. Donut sugar plum
                  jujubes sweet roll chocolate cake wafer. Tart caramels
                  jujubes. Dragée tart oat cake. Fruitcake cheesecake danish.
                  Danish topping candy jujubes. Candy canes candy canes lemon
                  drops caramels tiramisu chocolate bar pie.
                </p>
                <p>
                  Gummi bears tootsie roll cake wafer. Gummies powder apple pie
                  bear claw. Caramels bear claw fruitcake topping lemon drops.
                  Carrot cake macaroon ice cream liquorice donut soufflé. Gummi
                  bears carrot cake toffee bonbon gingerbread lemon drops
                  chocolate cake.
                </p>
              </div>
              <div
                class="tab-pane"
                id="settings-fill"
                role="tabpanel"
                aria-labelledby="settings-tab-fill"
              >
                <p>
                  Candy canes halvah biscuit muffin dessert biscuit marzipan.
                  Gummi bears marzipan bonbon chupa chups biscuit lollipop
                  topping. Muffin sweet apple pie sweet roll jujubes chocolate.
                  Topping cake chupa chups chocolate bar tiramisu tart sweet
                  roll chocolate cake.
                </p>
                <p>
                  Jelly beans caramels muffin wafer sesame snaps chupa chups
                  chocolate cake pastry halvah. Sugar plum cotton candy macaroon
                  tootsie roll topping. Liquorice topping chocolate cake tart
                  tootsie roll danish bear claw. Donut candy canes marshmallow.
                  Wafer cookie apple pie.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="col px-0 mt-3">
          <div class="card p-4  other">
            <div class="card-content my-5 text-center">
              <div class="mb-5 mx-3">
                <h4>
                  You are not connected to your wallet.
                </h4>
                <p class="text-grey">
                  To purchase a token your wallet should be connected.
                </p>
              </div>

              <div>
                <button class="btn-grey px-5 py-2 text-white">
                  Connect Wallet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Chart from '../components/utils/Chart.vue';
export default {
  components: { Chart },
  async asyncData({ params }) {
    const { token } = params;
    return { token };
  },
  layout: 'dashboard',
  data() {
    return {
      currentRange: '1WK',
      tabs: [
        'overview',
        'allocations',
        'methodology',
        'details',
        'rebalance-history',
        'governance',
      ],
      currentTab: 'overview',
    };
  },
  computed: {
    currentComponent() {
      const [tab1, tab2] = this.currentTab.split('-');
      return () =>
        import(`../components/tabs/${this.capitalize(tab2 || tab1)}.vue`);
    },
  },
  methods: {
    capitalize: value => value.charAt(0).toUpperCase() + value.slice(1),
    formatTitle: str => str.split('-').join(' '),
  },
};
</script>

<style scoped>
hr {
  border-top: 3px solid #f5f5f5;
}

.btn-grey {
  font-size: 1.25rem;
  font-weight: 500;
  border-radius: 5px;
}

.btn-grey:hover {
  background-color: #7a8085 !important;
  box-shadow: 0 0 0 0.125em rgb(54 54 54 / 25%);
}

nav {
  background: transparent;
  padding-left: 0;
  padding: 4px 16px;
  font-size: 1rem;
  white-space: nowrap;
}

.breadcrumb ol,
.breadcrumb ul {
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.breadcrumb li {
  align-items: center;
  font-size: 16px;
  display: flex;
}

.breadcrumb.has-succeeds-separator li + li:before {
  content: '\e844';
  font: normal normal normal 16px/1 feather !important;
}

.breadcrumb li + li:before {
  color: #b5b5b5;
  content: '\0002f';
}
.breadcrumb li:before {
  position: relative;
  left: -4px;
  top: 0;
}

.breadcrumb li:first-child a {
  padding-left: 0;
}

.breadcrumb li a {
  font-size: 16px;
  color: #b5b5b5;
}

.text-black {
  color: #000;
}

.card.other h4,
.card.first h4 {
  font-size: 1.35rem;
  /* font-weight: 400; */
}

.card.other p,
.card.first p {
  line-height: 1.3;
  font-size: 1.15rem;
}

.card.other {
  background: linear-gradient(#fff 80%, #f2f2f3);
}

.nav-item button {
  font-size: 1rem;
  font-weight: 500;
}

.nav-item.active {
  border: 0;
  border-radius: 8px;
  background: #f2f2f3;
  transition: background 0.3s ease;
}

.nav-item.active button {
  color: var(--primary-color);
}

.text-success {
  color: #18c09f !important;
}

.nav.nav-tabs .nav-item .nav-link:after {
  background: #333 !important;
}

.nav.nav-tabs .nav-item .nav-link.active:after {
  box-shadow: none !important;
  background: var(--primary-color) !important;
}
</style>
