const mongoose = require('mongoose');
const BuyingItem = mongoose.model('buyingItems');
const Item = mongoose.model('items')

module.exports = (app) => {
    app.post('/buyingItem/create',  async (req, res) => {
        console.log(req.body.item)
        const item = await Item.find({_id: req.body.item})
        console.log(item[0])
        const { picture, name, limit} = item[0]
        console.log(picture)
        const buyingItem = new BuyingItem({
            picture,
            name,
            limit,
            _user: req.user.id,
            date: Date.now()
        })
        
        const newItem = await buyingItem.save()
        res.send(newItem)
    })
    app.get('/buyingItem/items', async (req, res) => {
        const item = await BuyingItem.find({ _user: req.user.id })

        res.send(item)
    })
    app.delete('/buyingItem/delete', async (req, res) => {
        BuyingItem.findByIdAndRemove(req.body.item, (err, item) => {
           if(!err){
               res.send(item)
           } else {
               console.log(err)
           }
        })
    })
}

