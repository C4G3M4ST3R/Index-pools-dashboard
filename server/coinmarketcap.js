import axios from 'axios';

class Coinmarketcap {
  constructor() {
    const cmcClient = axios.create({
      baseURL: 'https://pro-api.coinmarketcap.com/v1',
      // timeout: 1000,
      headers: {
        Accept: 'application/vnd.GitHub.v3+json',
        'X-CMC_PRO_API_KEY': '8c1e7252-fbae-441e-8620-ce8de76baba8',
      },
    });

    this.$axios = cmcClient;
  }

  get(endpoint, options = {}) {
    return this._fetchJSON(endpoint, {
      ...options,
      method: 'GET',
    });
  }

  async getChartData(cmc_id, interval) {
    try {
      const { data } = await this.$axios.get(
        `/cryptocurrency/quotes/historical`,
      );
      // ?id=${cmc_id}&interval=${interval}
      console.log({ data });
      return data.data;
    } catch ({ response }) {
      console.log({ response: response.data });
      return null;
    }
    // return res.json();
  }

  async getLatestListingsData() {
    try {
      const { data } = await this.$axios.get(
        `/cryptocurrency/listings/latest?start=1&limit=5000&convert=USD`,
      );
      console.log({ data });
      return data;
    } catch (e) {
      console.log({ e });
    }
  }
}

module.exports = Coinmarketcap;
