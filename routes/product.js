const router = require('express').Router();

let products = require('../productData');



router.get('/product', (req,res)=>{
    res.render('product');
})


router.get('/api/products', (req,res) =>{
    res.json(products);
});

router.post('/api/products', (req, res) => {
    // try {
    //     console.log(city);
    // } catch(err) {
    //     next(ErrorHandler.serverError(err.message));
    // }

    const { name, price } = req.body;
    let product = {
        name,
        price,
        id: new Date().getTime().toString()
    }
    products.push(product);
    res.json(product);
});

router.delete('/api/products/:productId', (req, res) => {
    products = products.filter((product) => req.params.productId !== product.id);
    res.json({ status: 'OK' });
});


// router.get('/download', (req,res) =>{
//     res.render(path.resolve(__dirname) + "/public/index.html");
// })

module.exports = router;