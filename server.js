const express = require("express");
const path = require("path");
const app = express();
const router = require('./routes/index');
const productRoute = require('./routes/product');
const ErrorHandler = require('./errors/ErrorHandler');



app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(router);
app.use(productRoute);


app.use((req, res, next) => {
    return res.json({ message: 'page not found!'});
});

app.use((err, req, res, next) => {
    if (err instanceof ErrorHandler) {
        res.status(err.status).json({
            error: {
                message: err.message,
                status: err.status
            }
        });
    } else {
        res.status(500).json({
            error: {
                message: err.message,
                status: err.status
            }
        });
    }
});


const PORT = process.env.port || 5000;
app.listen(PORT, (err)=>{
    if(err){
        throw err;
    }
    console.log(`port running on ${PORT}`);
});