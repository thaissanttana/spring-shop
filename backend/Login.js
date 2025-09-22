import mongoose from "mongoose";

const LoginSchema = new mongoose.Schema({
    usuario: String,
    discord: String,
});

export default mongoose.model("Login", LoginSchema);