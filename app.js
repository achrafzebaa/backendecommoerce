const express=require("express")
const scategorieRouter =require("./routes/scategorie.route")
const dotenv=require("dotenv")
const app=express();
const mongoose=require("mongoose")
const categorie = require("./models/categorie")
const categorieRouter = require("./routes/categorie.route")
const articleRouter =require("./routes/article.route")
const cors=require('cors')
dotenv.config()
app.use(express.json())
app.use(cors())


app.get("/acceuil",(req,res)=>{

res.send("page acceuil")
})
// Connexion à la base données
mongoose.connect(process.env.DATABASE)
.then(() => {console.log("DataBase Successfully Connected");})
.catch(err => { console.log("Unable to connect to database", err);
process.exit(); });
app.use("/api/categorie", categorieRouter)
app.use('/api/scategorie', scategorieRouter);
app.use('/api/article', articleRouter);



app.listen(process.env.PORT,()=>
console.log(`app executer sur le port ${process.env.PORT}`))
module.exports = app;