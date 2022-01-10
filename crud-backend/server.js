const express = require('express');
const cors = require('cors');

// initialize an application
const app = express();

// use middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// declare the port
const PORT = process.env.PORT || 4000;

// routes
// get route
app.get('/', (req, res) =>{
  res.send('Crud application running successfully!')
});

// listen to the server
app.listen(PORT, () =>{
  console.log(`Server is running on port ${PORT}`);
});