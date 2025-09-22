import mongoose from "mongoose";

const PedidoSchema = new mongoose.Schema({
    usuario: String,
    discord: String,
    pokemon: String,
});

export default mongoose.model("Pedido", PedidoSchema);