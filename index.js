const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const controller = require('./controller');
require('dotenv').config()


const app = express();
massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database)
    
    /*
    database.new_planes()
        .then(planes=>{console.log(planes)})
        .catch(err=>console.log(err))

    database.get_planes()
        .then(planes=>{console.log(planes)})
        .catch(err=>console.log(err))
    */


});
app.use( bodyParser.json() );
app.use( cors() );

app.get('/api/planes',controller.getPlanes);

const port = process.env.PORT || 3000
app.listen( port , () => { console.log(`Server listening on port ${port}`); } );

