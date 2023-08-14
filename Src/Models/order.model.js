const mongoose = require("mongoose");

    const ProductSchema = new mongoose.Schema(
        {
          id: String,
          item_name: String,
          brand: String,
          category: String,
          type: String,
          description: String,
          price: String,
          url: String,
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
        total: String,
        date: Date,
        time: Date,
        order_desciption: String,
        status: String,
        rejected_reasons: String,
        rejected_reasons_description: String,
        products: [ProductSchema]
      },
      { 
      timestamps: true 
      }
  );


//   const CartSchema = new mongoose.Schema(
//     {
//       customer_email: String,
//       total: String,
//       item_count: String,
//       products: [ProductSchema],
//     },
//     { 
//       timestamps: true 
//     }
//   );

// const Cart = mongoose.model("cart", CartSchema);
const Order = mongoose.model("order", OrderSchema);

// module.exports.Cart = Cart;
module.exports.Order = Order;