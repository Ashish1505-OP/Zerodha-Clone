const { model } = require("mongoose");

const { OrderSchema } = require("../Schemas/OrdersSchema");

const OrdersModel = model("order", OrderSchema);

module.exports = { OrdersModel };