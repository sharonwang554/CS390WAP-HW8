const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 9000;
app.use(cors());

app.use('/login', (req, res) => {
  res.send({
    token: '<password of your choice>'
  });
});

// app.listen(port, () => console.log('API is running on http://localhost:9000/login'));

app.use(express.json());
app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/conn");
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});