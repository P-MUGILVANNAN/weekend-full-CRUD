const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema (
    {
        employeeId:{
            type:Number
        },
        firstName:{
            type:String
        },
        lastName:{
            type:String
        },
        email:{
            type:String
        },
        phone:{
            type:String
        },
        address:{
            type:String
        }
    },
    {
        collection:"Employee Details"
    }
)

module.exports = mongoose.model("Employee Details",EmployeeSchema);

