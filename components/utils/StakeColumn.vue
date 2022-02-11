<template>
  <div>
    <div class="d-md-flex justify-content-between w-100">
      <div class="d-none d-lg-block">
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

      <div class="card mr-3">
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

    <div class="d-lg-none">
      <div class="d-flex justify-content-between">
        <p>APR</p>
        <p>379.00%</p>
      </div>

      <div class="d-flex justify-content-between">
        <p>Multiplier</p>
        <div class="d-flex">
          <p>40x</p>
          <button
            class="info waves-effect mt-n1 mb-3 ml-2 bg-transparent"
            data-toggle="tooltip"
            data-placement="top"
            :data-original-title="multiplierInfo"
          >
            <svg
              viewBox="0 0 20 20"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM9 14H11V16H9V14ZM10.61 4.04C8.55 3.74 6.73 5.01 6.18 6.83C6 7.41 6.44 8 7.05 8H7.25C7.66 8 7.99 7.71 8.13 7.33C8.45 6.44 9.4 5.83 10.43 6.05C11.38 6.25 12.08 7.18 12 8.15C11.9 9.49 10.38 9.78 9.55 11.03C9.55 11.04 9.54 11.04 9.54 11.05C9.53 11.07 9.52 11.08 9.51 11.1C9.42 11.25 9.33 11.42 9.26 11.6C9.25 11.63 9.23 11.65 9.22 11.68C9.21 11.7 9.21 11.72 9.2 11.75C9.08 12.09 9 12.5 9 13H11C11 12.58 11.11 12.23 11.28 11.93C11.3 11.9 11.31 11.87 11.33 11.84C11.41 11.7 11.51 11.57 11.61 11.45C11.62 11.44 11.63 11.42 11.64 11.41C11.74 11.29 11.85 11.18 11.97 11.07C12.93 10.16 14.23 9.42 13.96 7.51C13.72 5.77 12.35 4.3 10.61 4.04Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div class="d-flex justify-content-between">
        <p>Liquidity</p>
        <div class="d-flex">
          <p>$2,320</p>
          <button
            class="info waves-effect mt-n1 mb-3 ml-2 bg-transparent"
            data-toggle="tooltip"
            data-placement="top"
            :data-original-title="liquidityInfo"
          >
            <svg
              viewBox="0 0 20 20"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM9 14H11V16H9V14ZM10.61 4.04C8.55 3.74 6.73 5.01 6.18 6.83C6 7.41 6.44 8 7.05 8H7.25C7.66 8 7.99 7.71 8.13 7.33C8.45 6.44 9.4 5.83 10.43 6.05C11.38 6.25 12.08 7.18 12 8.15C11.9 9.49 10.38 9.78 9.55 11.03C9.55 11.04 9.54 11.04 9.54 11.05C9.53 11.07 9.52 11.08 9.51 11.1C9.42 11.25 9.33 11.42 9.26 11.6C9.25 11.63 9.23 11.65 9.22 11.68C9.21 11.7 9.21 11.72 9.2 11.75C9.08 12.09 9 12.5 9 13H11C11 12.58 11.11 12.23 11.28 11.93C11.3 11.9 11.31 11.87 11.33 11.84C11.41 11.7 11.51 11.57 11.61 11.45C11.62 11.44 11.63 11.42 11.64 11.41C11.74 11.29 11.85 11.18 11.97 11.07C12.93 10.16 14.23 9.42 13.96 7.51C13.72 5.77 12.35 4.3 10.61 4.04Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div class="d-flex justify-content-between">
        <p>Deposit Fee</p>
        <p class="text-success">
          0%
        </p>
      </div>

      <div>
        <div>
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
  max-width: 350px;
  width: 100%;
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

p.text-success {
  font-weight: 500;
}

@media (max-width: 1024px) {
  .card {
    max-width: auto;
  }
}
</style>
