const mongoose = require('mongoose');
const router = require("express").Router();
const express = require("express");
const path = require("path");
const http = require('http');   //-------------websocket
const PORT = process.env.PORT || 3001;
const app = express();  
const socketIO = require('socket.io') //-------------websocket
let server = http.createServer(app)  //---------websocket
let io = socketIO(server); //---------websocket
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


io.on('connection', (socket) => {
  // console.log('Socket.io: A new user just connected!',socket.id);

  // socket.emit('bookSavedFromServer', {
  //   from: "ServerGoogleBookSearch",
  //   text: "The book save event on front-end took place."
  // })

  socket.on('new-book-save-message', (bookTitle) => {
    // console.log("-----------------11111--------------bookTitle")
    // console.log(bookTitle)
    // console.log("-----------------2222--------------bookTitle")
    socket.broadcast.emit('new-book-save-message', bookTitle);
  })


  socket.on('disconnect', () => {
    // console.log('Socket.io: User was disconnected!')
  });
});

server.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});


