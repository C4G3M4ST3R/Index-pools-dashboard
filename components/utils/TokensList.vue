<template>
  <div class="modal" id="tokensList" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content p-3 p-lg-5">
        <div class="modal-header bg-transparent">
          <h4 class="text-dark my-0">Select a token to continue</h4>
        </div>

        <div class="modal-body p-3">
          <template v-for="token in filteredTokens">
            <button
              class="d-flex bg-transparent coin-btn mb-3 justify-content-betweeen"
              :key="token.cmc_id"
              @click="$emit('selectToken', token.symbol)"
            >
              <img :src="token.img" />
              <span class="ml-2">{{ token.symbol }}</span>
            </button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectedToken: String,
  },
  computed: {
    filteredTokens() {
      return this.tokens.filter(key => key.symbol !== this.selectedToken);
    },
  },
};
</script>

<style scoped>
.coin-btn img {
  height: 45px;
}

.coin-btn span {
  font-size: 18px;
  position: relative;
  top: 6px;
}
</style>
