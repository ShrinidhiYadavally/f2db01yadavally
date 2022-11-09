var kite = require('../models/kite'); 
 
// List of all kites 
exports.kite_list = async function(req, res) { 
    try{ 
        theKites = await kite.find(); 
        res.send(theKites); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific kite. 
exports.kite_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: kite detail: ' + req.params.id); 
}; 
 
// Handle kite create on POST. 
exports.kite_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new kite(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"kite_type":"goat", "cost":12, "size":"large"} 
    document.kiteName = req.body.kiteName; 
    document.kiteCost = req.body.kiteCost; 
    document.quantityAvailable = req.body.quantityAvailable; 
    try{ 
        let results = await document.save(); 
        res.send(results); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle kite delete form on DELETE. 
exports.kite_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: kite delete DELETE ' + req.params.id); 
}; 
 
// Handle kite update form on PUT. 
exports.kite_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: kite update PUT' + req.params.id); 
}; 

// VIEWS 
// Handle a show all view 
exports.kite_view_all_Page = async function(req, res) { 
    try{ 
        theKites = await kite.find(); 
        res.render('kite', { title: 'Kite Search Results', results: theKites }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 