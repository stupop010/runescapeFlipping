const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const ItemLog = mongoose.model('itemLog');
const numeral = require('numeral');
const moment = require('moment');


module.exports = (app) => {
    app.get('/itemlog/items', async (req, res) => {
        const item = await ItemLog.find({ _user: req.user.id })
    
        res.send(item)
    })

    app.get('/itemlog/item', async (req, res) => {
        const items = await ItemLog.find({ _user: req.user.id })

        items.map((item) => {
            if(item.date.getDay() === moment().day()){
                console.log('hello')
            }
        })

    })

    app.post('/itemlog/create', async (req, res) => {
        const { picture, name, limit, buyFor, sellFor, howMany} = req.body

        const formatBuyFor = numeral(buyFor).value();
        const formatSellFor = numeral(sellFor).value();

        const item = new ItemLog({
            picture,
            name,
            limit,
            howMany,
            buyFor: formatBuyFor,
            sellFor: formatSellFor,
            _user: req.user.id,
            date: moment()
        })
        try {
            const sendItem = await item.save()

            // Adding to the total total
            const addNumber = (formatSellFor  - formatBuyFor) * howMany
            req.user.total += addNumber

            await req.user.save()
            res.send(sendItem)

        } catch (err){
            res.status(442).send(err)
        }
    })
}