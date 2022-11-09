const mongoose = require("mongoose") 
const kiteSchema = mongoose.Schema({ 
    kiteName: String, 
    kiteCost: Number, 
    quantityAvailable: Number 
}) 
 
module.exports = mongoose.model("Kite", 
kiteSchema) 