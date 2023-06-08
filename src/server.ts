import routerusers from './routes/users.routes';

const cors = require("cors");
const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use('/', routerusers);


app.listen(port, () => {
  // console.log(`Example app listening on port ${port}`);
  console.log('Authentication service started on port 3000');
});