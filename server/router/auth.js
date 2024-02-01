const express = require('express');
const router = express.Router();

const Data = require('../model/dataSchema');

router.post('/add-data', async (req, res) => {
    const { end_year, start_year, intensity, sector, topic, insight, url, region, impact, country, relevance, pestle, source, title, likelihood } = req.body;

    try {
        const data = new Data({ end_year, start_year, intensity, sector, topic, insight, url, region, impact, country, relevance, pestle, source, title, likelihood });

        const dataAdded = await data.save();
        if (dataAdded) {
            return res.status(200).json({ message: "Data added" });
        }
        else {
            return res.status(400).json({ error: "Internal server error" });
        }
    } catch (error) {
        console.log(error);
    }
});

router.get('/', (req, res) => {
    res.status(200).json({ messge: "Hello World" });
})

module.exports = router;