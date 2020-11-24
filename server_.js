(() => {
const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, 'build')));

app.listen(3000);	
console.log('Serving on 3000')
console.log('*'.repeat(10))
console.log('Love is forever...') 
})()
