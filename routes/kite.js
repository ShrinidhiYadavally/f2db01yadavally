var express = require('express');
const kite_controlers= require('../controllers/kite'); 
var router = express.Router();


const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
    }
/* GET costumes */
router.get('/', kite_controlers.kite_view_all_Page);

router.get('/detail', kite_controlers.kite_view_one_Page); 

router.get('/create', secured,kite_controlers.kite_create_Page); 

router.get('/update', secured,kite_controlers.kite_update_Page);

router.get('/delete', secured,kite_controlers.kite_delete_Page);


module.exports = router;
