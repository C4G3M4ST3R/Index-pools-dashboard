<template>
  <div class="container">
    <div class="d-sm-flex justify-content-between">
      <div>
        <h3 class="mt-2">Farms</h3>
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

    <tokens-table :coins="tokens" />
  </div>
</template>

<script>
export default {
  components: {
    TokensTable: () => import('../components/utils/TokensTable.vue'),
  },
  head: {
    title: 'Cag3 | Farms',
  },
  layout: 'dashboard',
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
</style>
