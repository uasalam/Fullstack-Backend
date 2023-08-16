const mongoose = require("mongoose");

    const ProductSchema = new mongoose.Schema(
        {
          id: String,
          item_name: String,
          brand: String,
          product_total: String
        },
        { 
          timestamps: true 
        }
    );

    const OrderSchema = new mongoose.Schema(
      {
        id: String,
        customer_email: String,
        customer_name: String,
        customer_phone: String,
        payment_type: String,
        url: String,
        total: String,
        date: String,
        status: String,
        rejected_reasons: String,
        products: [ProductSchema]
      },
      { 
      timestamps: true 
      }
  );

const Order = mongoose.model("order", OrderSchema);

// module.exports.Cart = Cart;
module.exports.Order = Order;