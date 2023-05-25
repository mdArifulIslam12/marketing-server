import express, { Application } from 'express'
import 'dotenv/config'
import cors from 'cors'
import { dbConncet } from './app/utils/dbConnect';
const app:Application = express();

// useing cors 
app.use(cors())
// useing prase
app.use(express.json())
app.use(express.urlencoded({extended: true}))

/// fille ejs
app.set('views engine','ejs')

// db connection
dbConncet()

// We all is route import
import productRoute from './app/modules/product/products.routes'
// here is default route
app.get('/',async(req,res)=>{
    res.render("index.ejs")
})

// custom is route
app.use('/api/v1/products',productRoute)

export {app}