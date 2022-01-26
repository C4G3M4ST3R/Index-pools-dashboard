<template>
  <div class="d-flex justify-content-between w-100">
    <div>
      <div class="pt-4">
        Stake:<a
          target="_blank"
          rel="noreferrer noopener"
          href="#"
          class="text-primary"
        >
          {{ token.name }}
          <svg
            viewBox="0 0 24 24"
            color="primary"
            width="20px"
            xmlns="http://www.w3.org/2000/svg"
            class="sc-bdnxRM cHQZti"
          >
            <path
              d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"
            ></path></svg
        ></a>
      </div>

      <a
        target="_blank"
        rel="noreferrer noopener"
        :href="token.uniswap_link"
        class="text-primary"
      >
        {{ symbol }} explorer
      </a>
    </div>

    <div class="card">
      <div class="d-flex">
        <small class="text-primary mr-2">YELD V2 </small>
        <small class="sc-gGGFjW kPjFEf">EARNED</small>
      </div>
      <div class="d-flex justify-content-between">
        <div>
          <div class="question-mark mb-n2">?</div>
          <small>≈0.00 USD</small>
        </div>
        <button
          disabled
          type="button"
          class="main-btn harvest-btn btn-disabled"
        >
          Harvest
        </button>
      </div>
    </div>

    <div class="card">
      <small class="text-primary text-uppercase">
        Start Farming
      </small>
      <div>
        <button
          disabled
          type="button"
          class="main-btn unlock-btn btn-primary w-100"
        >
          Unlock Wallet
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    symbol: {
      type: String,
      required: true,
    },
  },
  computed: {
    token() {
      const token = this.tokens.find(key => key.symbol === this.symbol);
      if (!token) return {};

      return token;
    },
  },
};
</script>

<style scoped>
a.text-primary:hover {
  color: #888888 !important;
}

.card {
  padding: 16px;
  border: 2px solid rgb(238, 234, 244);
  border-radius: 16px;
  min-width: 350px;
  /* width: 100%; */
}

.question-mark {
  font-weight: 600;
  font-size: 20px;
  color: rgb(69, 42, 122);
}

.main-btn {
  border: 0px;
  border-radius: 16px;
  box-shadow: rgb(14 14 44 / 40%) 0px -1px 0px inset;
  color: rgb(255, 255, 255);
  font-weight: 600;
  font-size: 16px;
  opacity: 1;
  transition: background-color 0.2s ease 0s;
  padding: 0px 24px;
  height: 48px;
  letter-spacing: 0.03em;
  outline: 0px;
}

.harvest-btn {
  margin-left: 6px;
}

.btn-disabled {
  background-color: rgb(233, 234, 235);
  border-color: rgb(233, 234, 235);
  box-shadow: none;
  color: rgb(189, 194, 196);
  cursor: not-allowed;
}

.unlock-btn {
  line-height: 1;
}
</style>
