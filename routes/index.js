const router = require('express').Router();

router.get('/', (req,res)=>{
    res.render('index');
})


router.get('/about', (req,res)=>{
    res.render('about');
})

// router.get('/download', (req,res) =>{
//     res.render(path.resolve(__dirname) + "/public/index.html");
// })

module.exports = router;