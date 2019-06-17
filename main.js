// this file includes the server code
// the node package installed we take en put this into a variable to use it 
const express = require('express');
const app = express();

// listen to a specific port and use a callback function 
app.listen(3000, () => console.log('listening at 3000'));
// we want to use express.static to host static files such as the index.html
// we make up a folder called public , everything in this folder will be publicly available
app.use(express.static('public'));

// what do we want the server to do?
// 1. serve web pages - simplified 1 page index.html
// 2. 