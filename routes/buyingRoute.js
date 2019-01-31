const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const BuyingItem = mongoose.model('buyingItems');
const numeral = require('numeral');

module.exports = (app) => {
    app.post('/buyingItem/create', requireLogin, async (req, res) => {
        const { picture, name, limit, buyFor, sellFor, howMany} = req.body

        const formatBuyFor = numeral(buyFor).value();
        const formatSellFor = numeral(sellFor).value();

        const item = new BuyingItem({
            picture,
            name,
            limit,
            howMany,
            buyFor: formatBuyFor,
            sellFor: formatSellFor,
            _user: req.user.id,
            date: Date.now()
        })
        
        const newItem = await item.save()
        res.send(newItem)
    })
    app.get('/buyingItem/items', requireLogin, async (req, res) => {
        const item = await BuyingItem.find({ _user: req.user.id })

        res.send(item)
    })
    app.delete('/buyingItem/delete', requireLogin, async (req, res) => {
        BuyingItem.findByIdAndRemove(req.body.item, (err, item) => {
           if(!err){
               res.send(item)
           } else {
               console.log(err)
           }
        })
    })
}

