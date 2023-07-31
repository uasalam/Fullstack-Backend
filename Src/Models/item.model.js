const mongoose = require("mongoose");

  const ItemSchema = new mongoose.Schema(
    {
      id: String,
      item_name: String,
      brand: String,
      quantity: String,
      description: String,
      url: String,
      type: String,
      category: String,
      price: String,
      availability: String,
      access: String
    },
    { 
      timestamps: true 
    }
  );

const Item = mongoose.model("item", ItemSchema);

module.exports.Item = Item;