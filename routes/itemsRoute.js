const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const Item = mongoose.model('items')

module.exports = (app) => {
    app.get('/api/items', async (req, res) => {
        const items = await Item.find();
        res.send(items);
    });
    app.get('/api/id', async (req, res) => {
        const item = await Item.findByIdAndUpdate(req.query.id);
        res.send(item)
    });
    app.patch('/api/edit/id', requireLogin, async (req, res) => {
        const item = await Item.findByIdAndUpdate(req.body._id, {
            $set: {limit: req.body.limit}
        });
        res.send(item)
    });
    app.delete('/api/delete', requireLogin, async (req, res) => {
        Item.findByIdAndRemove(req.body.item, (err, item) => {
           if(!err){
               res.send(item)
           } else {
               console.log(err)
           }
        })
    })
    app.post('/api/create', requireLogin, async (req, res) => {
        const item = await Item.create(req.body)
        res.send(item)
    })
}