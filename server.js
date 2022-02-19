const express = require('express');
const cors = require('cors');
const app = express();

var corsOption = {
    origin: 'http://localhost:2200'
}


const db = require('./app/models.js');

db.sequelize.sync();
db.sequelize.sync({force: true}).then(()=>{
    console.log('Drop and re-sync db')
});

app.use(cors(corsOption));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res)=>{
    res.json({message: 'i am doreen'})
})

const db = require('./TUESDAY/models');
db.sequelize.sync();
db.sequelize.sync({force: true}).then(()=>{
    console.log('Drop and re-sync db')
})

const port = process.env.port || 2200

app.listen(port, ()=>console.log(`server is running on port ${port}`))