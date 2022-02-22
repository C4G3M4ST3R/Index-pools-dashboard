<template>
  <div class="modal" id="tokensList" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content p-3 p-lg-5">
        <div class="modal-header bg-transparent py-0">
          <h4 class="text-dark my-0">Select a token to continue</h4>
        </div>

        <div class="modal-body p-3">
          <template v-for="token in filteredTokens">
            <button
              class="d-flex bg-transparent coin-btn mb-3 justify-content-betweeen"
              :key="token.cmc_id"
              @click="$emit('selectToken', token.symbol)"
            >
              <img
                :src="token.img"
                :class="{
                  smaller: !token.uniswap_link,
                  'mx-2': token.symbol === 'ETH',
                }"
              />
              <span class="ml-2">{{ token.symbol }}</span>
            </button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tokens from '~/mixins/tokens';
export default {
  props: {
    selectedToken: String,
  },
  computed: {
    filteredTokens() {
      return tokens.filter(key => key.symbol !== this.selectedToken);
    },
  },
};
</script>

<style scoped>
.coin-btn img {
  height: 45px;
}

.coin-btn img.smaller {
  height: 35px;
}

.coin-btn span {
  font-size: 18px;
  position: relative;
  top: 6px;
}
</style>
