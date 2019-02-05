const mongoose = require('mongoose');
const Favourite = mongoose.model('favourite')

module.exports = (app) => {
    app.post('/favourite/add', async (req, res) => {
        const { name, id } = req.body

        // getting all the favourties
        const favourties = await Favourite.find({ _user: req.user.id, id})

        if(favourties.length){
            res.status(400).send('Already a favourtie')
        } else {
            const favourite = new Favourite({
                name,
                id,
                _user: req.user._id
            })
    
            const newFavourite = await favourite.save()
    
            res.send(newFavourite)
        }
    })

    app.get('/favourite/fetch', async (req, res) => {
        const items = await Favourite.find({ _user: req.user.id })

        res.send(items)
    })
}
