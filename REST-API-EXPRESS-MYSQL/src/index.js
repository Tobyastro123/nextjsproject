const express = require('express');
const cors = require('cors');
// express() return a object
const app = express();

// Settings
// Set port -> Get system port or by defaul port 8088

app.set('port', process.env.PORT || 8088);

// Middlewares
app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
})
// body-parser to Parse incoming request bodies
app.use(express.json());
// Routes
app.use(require('./routes/employees'));

// Starting the server
app.listen(app.get('port'), () => {
    console.log("Server on port", app.get('port'));
})
