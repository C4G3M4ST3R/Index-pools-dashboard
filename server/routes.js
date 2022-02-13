import axios from 'axios';
import prices from './prices';
import utils from './utils';
const { Router } = require('express');
const router = Router();

router.get('/get-crypto-data', async (req, res, next) => {
  try {
    const { id, interval } = req.query;
    // let api_key = 'b758f1798962a95d5acaa68a77547284a8d56349';

    // const url = `history?key=${api_key}&id=${id}&interval=${interval}`;
    // const { data } = await axios.get(
    //   `https://api.nomics.com/v1/currencies/predictions/${url}`,
    // );

    // if (data)
    return res.json({
      labels: prices.map(key => {
        let date = new Date(key.timestamp_end);
        if (['1d', '1h'].includes(interval.toLowerCase()))
          return utils.formatAMPM(date);
        else if (['all', '1y'].includes(interval.toLowerCase()))
          return utils.formatDate(date);

        return date
          .toDateString()
          .toUpperCase()
          .slice(4, 10);
      }),
      prices: prices.map(
        key => Math.round(Number(key.actual_price_end) * 100) / 100,
      ),
    });

    // throw new Error();
  } catch (e) {
    console.log({ e });
    next(e);
  }
});

module.exports = router;
