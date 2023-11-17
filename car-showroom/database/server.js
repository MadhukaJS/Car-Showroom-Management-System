const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./connect');
const dotenv = require('dotenv');

dotenv.config();

const postMessageRoute = require('./routes/postmessage');
const getmessageRoute = require('./routes/getmessage');
const getmessagebyidroute = require('./routes/getmessagebyid');
const postuser = require('./routes/registrationroute');
const loguser = require('./routes/loginroute');
const postads=require('./routes/postads')

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

connectDB(process.env.MONGODB_URL);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use('/post-message',postMessageRoute); 
app.use('/get-message',getmessageRoute);
app.use('/get-message-byid',getmessagebyidroute);
app.use('/register',postuser);
app.use('/login',loguser);
app.use('/post-advertisement',postads);

