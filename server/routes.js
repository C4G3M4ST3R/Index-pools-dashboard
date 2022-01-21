const { Router } = require('express');
import Coinmarketcap from './coinmarketcap';
const router = Router();

router.get('/get-crypto-data', async (req, res, next) => {
  try {
    const { cmc_id, interval } = req.query;

    const cmc = new Coinmarketcap();
    const data = await cmc.getChartData(cmc_id, interval);

    if (data)
      return res.json({
        cmc_id,
        interval,
        data,
      });

    throw new Error();
  } catch (e) {
    next(e);
  }
});

module.exports = router;
