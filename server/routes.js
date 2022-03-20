import axios from 'axios';
import prices from './prices';
import utils from './utils';
const { Router } = require('express');
const router = Router();

const baseUrl = `https://api.coinstats.app/public/v1`;

router.get('/get-crypto-data', async (req, res, next) => {
  try {
    const { id, interval } = req.query;

    const {
      data: { chart },
    } = await axios.get(`${baseUrl}/charts?period=${interval}&coinId=${id}`);

    // elements in chart Array
    const chartData = chart.sort((b, a) => (b[0] > a[0] ? 1 : -1)).slice(0, 8);

    // first element is timestamp
    const timestamps = chartData.map(key => key[0]);

    // second element is price
    const prices = chartData.map(key => key[1]);

    // third has to be difference in previous price
    // fourth - I dont know
    console.log({ timestamps });

    // Format timestamp - change timestamps to labels
    const labels = timestamps.map(timestamp => {
      let date = new Date(timestamp);

      if (['1d', '24h', '1h'].includes(interval.toLowerCase()))
        return utils.formatAMPM(date);
      else if (['all', '1y'].includes(interval.toLowerCase()))
        return utils.formatDate(date);

      return date
        .toDateString()
        .toUpperCase()
        .slice(4, 10);
    });

    return res.json({
      labels,
      prices,
    });

    // throw new Error();
  } catch (e) {
    console.log({ e });
    next(e);
  }
});

module.exports = router;
