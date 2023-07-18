const express= require('express');
const app = express();

//middileware 
app.use(express.json());
app.use(express.urlencoded({extended: true}))

//definir rutas
app.use(require('./routes/index'));

app.listen(3000);
console.log('Server on port 3000');

