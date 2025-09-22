import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Login from "./Login.js";
import Pedido from "./Pedido.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conectado ao MongoDB");
    } catch (error) {
        console.log("Erro ao conectar com o MongoDB", error);
    }
}

connectDB();

// LOGIN
app.post("/login", async (req, res) => {
    try {
        const novoLogin = await Login.create(req.body);
        res.json(novoLogin);
    } catch (error) {
        res.json({ error: error });
    }
});
app.get("/login", async (req, res) => {
    try {
        const logins = await Login.find();
        res.json(logins);
    } catch (error) {
        res.json({ error: error });
    }
});

// PEDIDOS
app.post("/pedido", async (req, res) => {
    try {
        const novoPedido = await Pedido.create(req.body);
        res.json(novoPedido);
    } catch (error) {
        res.json({ error: error });
    }
});
app.get("/pedido", async (req, res) => {
    try {
        const pedidos = await Pedido.find();
        res.json(pedidos);
    } catch (error) {
        res.json({ error: error });
    }
});



app.listen(PORT, () => console.log(`O servidor está rodando na porta ${PORT}`));