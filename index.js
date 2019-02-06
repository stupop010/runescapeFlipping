const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const keys = require('./config/key');
const cookieSession = require('cookie-session');

require('./models/User');
require('./models/RunescapeItem');
require('./models/BuyingItem');
require('./models/Itemlog');
require('./models/Favourite');
require('./services/passport');

//mongoose.connect(keys.mongoDB, { useNewUrlParser: true })

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRoute')(app);
require('./routes/itemLog')(app);
require('./routes/itemsRoute')(app);
require('./routes/buyingRoute')(app);
require('./routes/favouriteRoute')(app);

mongoose.connect(keys.mongoDB, { useNewUrlParser: true }).then(()=>{
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
    console.log('app running on port 5000')
}) 
}).catch(err => {
    console.log(err)
})
  