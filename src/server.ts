import routerusers from './routes/users.routes';
import routerannounces from './routes/annonces.routes';
import routermatch from './routes/match.routes'
import routermessages from './routes/message.routes';

const cors = require("cors");
const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = 3000;

app.use(bodyParser.json({limit: '200mb'}))
app.use(bodyParser.urlencoded({limit: '250mb',extends:true}))
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use('/', routerusers);
app.use('/', routerannounces);
app.use('/', routermatch);
app.use('/',routermessages);


app.listen(port, () => {
  // console.log(`Example app listening on port ${port}`);
  console.log('Authentication service started on port 3000');
});