import mongoose, { Schema, models } from "mongoose"

const User = new mongoose.Schema({
    comment: String,
},
    { timestamps: true },
)

export default mongoose.models.User || mongoose.model("User", User)
// isso quer dizer que se nao exister um Schema crie um igual ao de cima