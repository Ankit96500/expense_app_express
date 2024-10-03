import e from 'express';
import {getdata,adddata,deletedata,editdata,geteditdata} from '../controllers/expense_controller.js'

const routes = e.Router();

// create routes

routes.get('/get_dt',getdata)

routes.post('/add_dt',adddata)

routes.delete('/delete_dt/:id',deletedata)

routes.put('/edit_dt/:id',editdata)

routes.get('/getedit_dt/:id',geteditdata)



export default routes


