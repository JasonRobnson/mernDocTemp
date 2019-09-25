const express = require('express');
const app = express();
const mongoose = require('mongoose');
const auth = require('./routes/api/auth.js');
const snowInfo = require('./routes/api/snowInfo.js');
const profile = require('./routes/api/profile.js');
const bodyParser = require('body-parser');
const db = require('./config/keys').mongoURI;
const passport = require('passport');
const path = require('path')

//Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* eslint-disable no-console */
//CONNECT  TO MONGODB

mongoose
	.connect(db, { useNewUrlParser: true,
		useUnifiedTopology: true })
	.then(() => console.log('MongoDB Connected'))
	.catch(err => console.log(err));

//Passport Middleware
app.use(passport.initialize());

//Passport Config
// require('./SnowEmergencyApp/config/passport.js')(passport);

//USE ROUTES
app.use('/api/auth', auth);

app.use('/api/profile', profile);
app.use('/api/snowInfo', snowInfo);

// //Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  //Set static folder
  app.use(express.static('stockclient/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'stockclient', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Server running on port ${port}`));
