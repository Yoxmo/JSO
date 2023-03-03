const express = require("express");
const home = require("./ROUTES");
const path = require('path')

const app = express();


app.use('/img', express.static(path.join(__dirname, '/SOURCE/img')));
app.use('/js', express.static(path.join(__dirname, '/SOURCE/js')));
app.use('/dist', express.static(path.join(__dirname, '/SOURCE/dist')));
app.use('/css', express.static(path.join(__dirname, 'SOURCE/css')));

app.use(express.json());

app.use("/", home);


const port = 8080;
app.listen(port, () => console.log(`Listening to port ${port}`));
