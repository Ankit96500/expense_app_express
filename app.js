import e from "express";
import bodyParser from "body-parser";
import cors from "cors";
import sequelize from './utils/database.js'


const app = e();
const PORT = process.env.PORT || 8000

// use body parser
app.use(bodyParser.json({extended:false}));
// app.use(bodyParser.urlencoded({extended:false}));

// use cors
app.use(cors())

// // load routes
import expense from "./routers/expense_routes.js"
app.use(expense)


// test the connection
sequelize.authenticate()
.then(() =>{
    console.log('connection established..');
})
.catch(err =>{
    console.log('connection not connected',err);
})

// sync model to database
sequelize.sync({force:false})
.then(result =>{  
    app.listen(PORT,()=>{
        console.log('server is running..',PORT);
    })
})
.catch(err =>{
    console.log('server syn not connected',err);
    
})




