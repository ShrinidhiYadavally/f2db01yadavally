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
exports.kite_detail = async function(req, res) { 
    console.log("detail" + req.params.id)
    try {
    result = await kite.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
}; 


 
// Handle kite create on POST. 
exports.kite_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new kite(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"kite_type":"goat", "kiteCost":12, "quantityAvailable":"large"} 
    document.kiteName = req.body.kiteName; 
    document.kitekiteCost = req.body.kitekiteCost; 
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
exports.kite_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await kite.findById( req.params.id)
 // Do updates of properties
 if(req.body.kiteName)
 toUpdate.kiteName = req.body.kiteName;
 if(req.body.kiteCost) toUpdate.kiteCost = req.body.kiteCost;
 if(req.body.quantityAvailable) toUpdate.quantityAvailable = req.body.quantityAvailable;
 let result = await toUpdate.save();
 console.log("Success " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
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