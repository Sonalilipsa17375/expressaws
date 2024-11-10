const express = require('express')
const app = express();

const port = 8000

app.get('/', (req, res)=>{
    res.send('HeHeee ,deploying in aws..Jaldii bahr niklo yahan se ..danger zone hai ye');
})


app.listen(port, ()=>{
    console.log(`lisitening at port - ${port}`);
})