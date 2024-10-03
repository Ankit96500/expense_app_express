import Expense from "../models/_Mexpense.js"

export const getdata = (req,res)=>{
    Expense.findAll()
    .then(data =>{
        console.log('Data Sent To Client',data);
        res.json(data)
    })
    .catch(err =>{
        res.json({"msg":"Sorry Try Again.."})
        // console.log('Not Saved',err);
    })
}

export const adddata = (req,res)=>{
    // console.log(req.body);
    const expense_amount = req.body.expense_amount
    const desc = req.body.desc
    const category = req.body.category
    Expense.create({
        expense_amount:expense_amount,
        desc:desc,
        category:category
    })
    .then(result =>{
        // console.log('D',result);
        res.json({'msg':"ok Data Created.."})
    })
    .catch(err =>{
        res.json({'msg':"Not Created.. Please Check The Fields."})
        // console.log('not Created..',err);
    })

    // res.json({'id':"ok..jkj"})
}

export const deletedata = (req,res)=>{
    // console.log('--------------',req.params);
    const id = req.params.id
    Expense.findByPk(id)
    .then(expense =>{
        expense.destroy()
        res.json({'msg':"ok Data Deleted.."})
    })
    .catch(err =>{
        res.json({'msg':"Not  Deleted.."})
        // console.log('not Deleted..',err);
    })
    // res.json({'msg':"ok beta"})
}

export const editdata = (req,res)=>{
    // console.log(req.params);
    // console.log(req.body);
    // console.log('----------------------',req.body);
    const expense_amount = req.body.expense_amount
    const desc = req.body.desc
    const category = req.body.category
    const id = req.params.id
    Expense.findByPk(id)
    .then(expense =>{
        expense.expense_amount=expense_amount
        expense.desc=desc
        expense.category=category
        expense.save(),
        res.json({'msg':"ok Data Updated...."})
    })
    .catch(err =>{
        res.json({'msg':"Not Updated.."})
        // console.log('Not Updated..',err);
    })
    // res.json({'msg':"Notbdfhgf  Updated.."})

}


export const geteditdata  = (req,res)=>{
    // console.log('iam acall on getedit data');
    
    // console.log(req.params);
    const id = req.params.id
    Expense.findByPk(id)
    .then(data =>{
        console.log('the dataa to be sent',data);
        
        res.json(data)
    })
    .catch(err =>{
        res.json({'msg':"Not Sent edit data .."})
        // console.log('Not Updated..',err);
    })
}




