const express = require ('express');

const bodyParser = require('body-parser');
const cors = require('cors');
//const axios = require('axios');
const {getAlbum} = require('./google_photos')
   

const PORT = 3050;

const app = express()
app.use(bodyParser.json());
app.use(cors())


app.use(function(req, res, next) {
    const origin = req.headers.origin;
    if(origin){
         res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
  app.get('/', (req, res) => {
    res.send('wellcome to my api')
});

  app.get('/:id', async function(request, response) {
    try {
      const results = await getAlbum(request.params.id)
      response.json(results);
      console.log('Google')
    }
    catch(e) {
      response.status(500) 
    }
  });


//connection
app.listen(PORT, () => 
console.log(`Servidor corriendo en el puerto ${PORT}`));