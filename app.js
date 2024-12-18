const express=require("express")
const scategorieRouter =require("./routes/scategorie.route")
const dotenv=require("dotenv")
const app=express();
const mongoose=require("mongoose")
const categorie = require("./models/categorie")
const categorieRouter = require("./routes/categorie.route")
const articleRouter =require("./routes/article.route")
dotenv.config()
app.use(express.json())
app.use("/api/categorie", categorieRouter)
app.use('/api/scategorie', scategorieRouter);
app.use('/api/article', articleRouter);

app.get("/acceuil",(req,res)=>{

res.send("page acceuil")
})
// Connexion à la base données
mongoose.connect(process.env.DATABASECLOUD)
.then(() => {console.log("DataBase Successfully Connected");})
.catch(err => { console.log("Unable to connect to database", err);
process.exit(); });



app.listen(process.env.PORT,()=>
console.log(`app executer sur le port ${process.env.PORT}`))