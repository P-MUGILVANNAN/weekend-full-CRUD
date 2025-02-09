const express = require('express');
const EmployeeSchema = require('../model/EmployeeSchema');
const { json } = require('body-parser');
const router = express.Router();


// Create Employee
router.post("/Form",(req,res)=>{
    console.log("Data recieved: ",req.body);
    EmployeeSchema.create(req.body)
    .then((data)=>{
        res.status(200).json(data);
    })
    .catch((err)=>{
        console.log("Error posting data",err);
        res.status(400).json({message:err.message});
    });
});

// read employee
router.get("/employee",(req,res)=>{
    EmployeeSchema.find()
    .then((response)=>{
        res.json(response);
        console.log(json(response));
    })
    .catch((err)=>{
        console.log("Error fetching data",err);
    });
});

// update data
router.put("/update/:id",(req,res)=>{
    const id = req.params.id;
    const updatedData = req.body;
    EmployeeSchema.findByIdAndUpdate(id,updatedData)
    .then((data)=>{
        res.status(200).json(data);
    })
    .catch((err)=>{
        console.log("Error updating data",err);
    })
});

// delete data
router.delete('/delete/:id',(req,res)=>{
    const id = req.params.id;
    EmployeeSchema.findByIdAndDelete(id)
    .then((data)=>{
        res.status(200).json(data);
    })
    .catch((err)=>{
        console.log("Error deleting data",err);
    })
})




module.exports=router;