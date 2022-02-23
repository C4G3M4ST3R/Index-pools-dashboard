<template>
  <div class="container">
    <div class="d-sm-flex justify-content-between">
      <div>
        <h3 class="mt-2">Swap</h3>
      </div>

      <div>
        <p v-if="isAuthenticated" class="my-0 text-success">
          Connected
        </p>
        <div v-else>
          <button
            class="btn-grey px-4 py-2 text-white"
            @click.prevent="connect"
          >
            Connect MetaMask
          </button>
        </div>
      </div>
    </div>

    <form class="row glass py-5" @submit.prevent="">
      <div class="col-12">
        <label for="from" class="d-flex justify-content-between">
          <span>From</span>
          <span>
            Balance: 0.00003
          </span>
        </label>
        <div class="form-group d-flex justify-content-between">
          <div>
            <button
              @click="selectedToken = fromCoin.symbol"
              class="btn coin-btn d-flex"
              id="fromCoin"
            >
              <img :src="fromCoin.img" />
              <span class="mx-1">{{ fromCoin.symbol }}</span>
              <i class="feather icon-chevron-right"></i>
            </button>
          </div>

          <div class="input-field">
            <input v-model.number="fromCoin.amount" placeholder="0.00" />
          </div>
        </div>
      </div>

      <div class="col-12 my-3">
        <label for="to" class="d-flex justify-content-between">
          <span>To</span>
          <span>
            Estimate:
            {{ fromCoin.amount ? '0.032832' : '0.00000' }}
          </span>
        </label>
        <div class="form-group d-flex justify-content-between">
          <div>
            <button
              @click="selectedToken = toCoin.symbol"
              class="btn coin-btn d-flex"
              id="toCoin"
            >
              <img :src="toCoin.img" />
              <span class="mx-1">{{ toCoin.symbol }}</span>
              <i class="feather icon-chevron-right"></i>
            </button>
          </div>

          <div class="input-field">
            <input id="to" placeholder="0.00" />
          </div>
        </div>
      </div>

      <div class="col-12">
        <button class="btn btn-block btn-primary rounded-lg py-3">
          <h4 class="my-0">
            Swap
          </h4>
        </button>
      </div>
    </form>

    <tokens-list
      v-if="!!selectedToken"
      :selectedToken="selectedToken"
      @selectToken="chooseToken"
    />
  </div>
</template>

<script>
import TokensList from '../components/utils/TokensList.vue';
import tokens from '../mixins/tokens';

export default {
  components: { TokensList },
  head: {
    title: 'Cag3 | Swap',
  },
  layout: 'dashboard',
  data() {
    return {
      fromCoin: tokens[0] || {},
      toCoin: tokens[1],
      selectedToken: null,
    };
  },
  methods: {
    chooseToken(symbol) {
      const token = tokens.find(key => key.symbol === symbol);
      const selectedToken = this.selectedToken;

      this.selectedToken = null;
      this.closeAllModals();

      if (this.toCoin.symbol === selectedToken) {
        this.toCoin = token;
        return;
      }

      this.fromCoin = token;
    },
  },
  watch: {
    selectedToken() {
      if (!!this.selectedToken) {
        this.$nextTick(() => {
          $('#tokensList').modal();
        });
        return;
      }

      this.closeAllModals();
    },
  },
};
</script>

<style scoped>
.btn-grey {
  font-size: 1.25rem;
  font-weight: 500;
  border-radius: 5px;
}

.btn-grey:hover {
  background-color: #7a8085 !important;
  box-shadow: 0 0 0 0.125em rgb(54 54 54 / 25%);
}

.glass {
  width: 50%;
  padding: 15px;
  margin: 125px auto 50px;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  position: relative;
  z-index: 1;
  background: #f9f9f900;
  overflow: hidden;
}

.dark-layout .glass {
  background-color: rgba(16, 22, 58, 0.81961);
}

.form-group {
  position: relative;
}

.form-group::after {
  /* box-shadow: 0 0 0 0.125em rgb(54 54 54 / 25%); */
  background-color: #f9f9f9;
  border: none;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.form-group .input-field input {
  background: transparent;
  text-align: right;
  border: none;
  font-size: 2rem;
}

.form-group .input-field input::placeholder,
.form-group .input-field input {
  color: #000;
}

.dark-layout .form-group .input-field input::placeholder,
.dark-layout .form-group .input-field input {
  color: #fff;
}

.coin-btn {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  border-radius: 25px;
}

.dark-layout .coin-btn {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5) !important;
}

.coin-btn img {
  height: 35px;
  border-radius: 50%;
}

.coin-btn span,
.coin-btn i {
  position: relative;
  top: 3px;
}

.coin-btn span {
  font-size: 18px;
}

.coin-btn i {
  font-size: 20px;
  top: 6px;
}

.dark-layout .coin-btn i {
  color: #c2c6dc;
}

label {
  font-size: 16px;
}
</style>
