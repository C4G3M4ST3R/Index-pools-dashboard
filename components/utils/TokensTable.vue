<template>
  <div class="row mt-5 pt-lg-5" id="basic-table">
    <div class="col-12 pb-5 d-flex justify-content-between">
      <div class="d-flex">
        <div>
          <div class="custom-control custom-control-primary custom-switch">
            <input
              type="checkbox"
              class="custom-control-input"
              id="customSwitch3"
            />
            <label class="custom-control-label" for="customSwitch3"></label>
            <span class="ml-2">Staked only</span>
          </div>
        </div>

        <div class="ml-3 mt-n1">
          <div class="btn-group btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-outline-primary waves-effect active">
              <input type="radio" name="status" id="radio_option1" checked />
              Active
            </label>
            <label class="btn btn-outline-primary waves-effect">
              <input type="radio" name="status" id="radio_option2" />
              Inactive
            </label>
          </div>
        </div>
      </div>

      <div class="d-flex input-fields">
        <div class="form-group mb-0 mr-3">
          <select class="form-control w-100" id="basicSelect">
            <option selected disabled value="">
              Sort By
            </option>
            <option>Default</option>
            <option>Blade Runner</option>
            <option>Thor Ragnarok</option>
          </select>
        </div>

        <div class="form-group mb-0">
          <input
            type="text"
            class="form-control w-100"
            placeholder="Search..."
          />
        </div>
      </div>
    </div>
    <div class="col-12">
      <div class="card shadow rounded-10">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th></th>
                <th class="text-center">Earned</th>
                <th class="text-center">APR</th>
                <th>Liquidity</th>
                <th></th>
                <th>Multiplier</th>
                <th class="text-center">Deposit Fee</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <template v-for="{ name, symbol, img } in tokens">
                <tr
                  class="pointer"
                  @click="show[symbol] = !show[symbol]"
                  :key="symbol + 'a'"
                >
                  <td>
                    <div class="d-flex">
                      <img :src="img" class="coin-image mr-3" />
                      <h5 class="mt-3">{{ name }} ({{ symbol }})</h5>
                    </div>
                  </td>
                  <td class="text-center">
                    <p>?</p>
                  </td>
                  <td class="text-center">
                    <p>380.68%</p>
                  </td>
                  <td>
                    <p>$2,320</p>
                  </td>
                  <td>
                    <button
                      class="info waves-effect mb-1 bg-transparent"
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
                  </td>
                  <td>
                    <div class="d-flex">
                      <p>40x</p>
                      <button
                        class="info waves-effect mb-1 ml-2 bg-transparent"
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
                  </td>
                  <td class="text-center">
                    <p class="text-success">
                      0%
                    </p>
                  </td>
                  <td>
                    <p class="text-primary">
                      Details

                      <i
                        class="feather chevron"
                        :class="[
                          show[symbol]
                            ? 'icon-chevron-up'
                            : 'icon-chevron-down',
                        ]"
                      ></i>
                    </p>
                  </td>
                </tr>
                <tr class="staking" v-if="show[symbol]" :key="symbol + 'b'">
                  <td colspan="8">
                    <stake-column :symbol="symbol" />
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StakeColumn from './StakeColumn.vue';

export default {
  components: { StakeColumn },
  props: {
    coins: Array,
  },
  data() {
    return {
      show: {},
      liquidityInfo:
        'The total value of the funds in this farm’s liquidity pool',
      multiplierInfo:
        'The multiplier represents the amount of YELD rewards each farm gets.',
    };
  },
  mounted() {
    $('[data-toggle="tooltip"]').tooltip();

    let obj = {};
    for (let token of this.coins) {
      obj = {
        ...obj,
        [token.symbol]: false,
      };
    }

    this.show = obj;
  },
};
</script>

<style scoped>
.custom-control-input:focus ~ .custom-control-label::before {
  box-shadow: none !important;
}

.custom-control-input ~ .custom-control-label::after {
  top: 2px;
  left: 3px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
}

.custom-control-input:checked ~ .custom-control-label::after {
  left: 7px;
}

.custom-control-input:not(:disabled):active ~ .custom-control-label::before {
  outline: none !important;
  background-color: transparent !important;
}

.custom-control-label::before {
  border-color: var(--primary-color) !important;
}

.custom-control-input ~ .custom-control-label::before {
  width: 50px;
  height: 25px;
  border-radius: 25px;
}

.custom-control-input:checked ~ .custom-control-label::before {
  background-color: var(--primary-color);
}

/* grouped buttons */
.btn-group-toggle {
  background-color: rgb(238, 234, 244);
}

.btn-group-toggle,
.btn-group-toggle .btn {
  border-radius: 25px !important;
}

.btn-group-toggle .btn {
  border-color: transparent !important;
  padding: 5px 15px;
}

.btn-group-toggle .btn.active {
  background-color: var(--primary-color);
}

.btn-group-toggle .btn input:checked {
}

.input-fields .form-group {
  width: 220px;
}

.staking {
  background: rgb(250, 249, 250);
  width: 100%;
}

.input-fields .form-group:first-child {
  width: 180px;
}

.input-fields .form-group select,
.input-fields .form-group input {
  border-radius: 15px;
}

/* Table */
.table thead tr th,
.table tr:first-child td {
  border-top: none;
}

.table thead tr th {
  border-bottom-width: 1px;
}

.table tr:last-child td {
  border-bottom: none;
}

.table tr td .coin-image {
  height: 45px;
}

.table tr td p,
.table tr td small {
  font-weight: 100;
  margin: 0;
}

.table tr td p.text-success {
  font-weight: 500;
}

.pointer {
  cursor: pointer;
}

button.info svg {
  fill: #7a8085;
}

.chevron {
  position: relative;
  top: 3px;
}
</style>
