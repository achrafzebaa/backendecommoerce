const express=require("express")
const scategorieRouter =require("./routes/scategorie.route")
const dotenv=require("dotenv")
const app=express();
const mongoose=require("mongoose")
const categorie = require("./models/categorie")
const categorieRouter = require("./routes/categorie.route")
const articleRouter =require("./routes/article.route")
const cors=require('cors');
const path = require('path');
dotenv.config()
app.use(express.json())
app.use(cors())




// Connexion à la base données
mongoose.connect(process.env.DATABASECLOUD)
.then(() => {console.log("DataBase Successfully Connected");})
.catch(err => { console.log("Unable to connect to database", err);
process.exit(); });
app.use("/api/categorie", categorieRouter)
app.use('/api/scategorie', scategorieRouter);
app.use('/api/article', articleRouter);
//dist reactjs
app.use(express.static(path.join(__dirname, './client/build'))); // Route pour les pages non trouvées, redirige vers index.html
app.get('*', (req, res) => { res.sendFile(path.join(__dirname,
'./client/build/index.html')); });


app.listen(process.env.PORT,()=>
console.log(`app executer sur le port ${process.env.PORT}`))
module.exports = app;