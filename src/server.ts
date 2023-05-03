import routermatch from "./routes/MatchRoute";
import routerannounces from "./routes/announceRoute";
import routeruser from "./routes/userRoute";

const cors = require("cors");
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/users', routeruser);
app.use('/match', routermatch);
app.use('/announces',routerannounces);

app.listen(port, () => {
  // console.log(`Example app listening on port ${port}`);
  console.log('Authentication service started on port 3000');
});
