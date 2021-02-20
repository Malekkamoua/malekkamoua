const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static(path.join(__dirname, 'public')));

router.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});

router.post('/email', (req, res) => {
res.send("here")
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');