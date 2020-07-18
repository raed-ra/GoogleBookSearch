const mongoose = require('mongoose');
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./config/keys').mongoURI;
const apiRoutes = require('./routes/router')

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}



// Define API routes here
app.use('/api', apiRoutes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//Connect to Mongo
mongoose.connect(db, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true 
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
