const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Routes = require('./controller/EmployeeController');
const bcrypt = require('bcrypt');
const jwt  = require("jsonwebtoken");
const path = require("path");
const dotenv = require('dotenv');
dotenv.config();


app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const UserSchema = require("./model/UserSchema");

const secretKey = process.env.SECRET_KEY;;

const uri = process.env.MONGO;
mongoose.connect(uri)
.then(()=>{
    console.log("Connected to MongoDB");
})
.catch((err)=>{
    console.log("Error connecting to MongoDB",err);
})


app.get('/',(req,res)=>{
    res.send('Express app is running');
})

// =====================================================================  Endpoint for registering the user 

app.post("/signup", async (req, res) => {
    try {
      let check = await UserSchema.findOne({ email: req.body.email });
      if (check) {
        return res.status(400).json({
          success: false,
          errors: "Existing user found with the same email ID",
        });
      }
      // Hash the password before storing it
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
      
      // Create a new user with the hashed password
      const User = new UserSchema({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword, // Store the hashed password
      });
      await User.save();
      console.log("User saved successfully");
      const data = {
        user: {
          Id: User._id,
        },
      };
      const token = jwt.sign(data, secretKey);
      res.json({
        success: true,
        token,
      });
    } catch (error) {
      res.status(500).json({ success: false, errors: "Error saving user" });
    }
  });
  
  app.post("/login", async (req, res) => {
    try {
      const user = await UserSchema.findOne({ email: req.body.email });
      if (user) {
        const passCompare = await bcrypt.compare(
          req.body.password,
          user.password
        );
        if (passCompare) {
          const data = {
            user: {
              Id: user._id,
            },
          };
          const token = jwt.sign(data, secretKey);
          res.json({ success: true, token });
          console.log("User logged in successfully: ", data);
        } else {
          res.status(400).json({ success: false, errors: "Wrong password" });
        }
      } else {
        res.status(400).json({ success: false, errors: "Wrong Email ID" });
      }
    } catch (error) {
      res.status(500).json({ success: false, errors: "Error logging in" });
    }
  });


app.use('/',Routes);

app.listen(process.env.PORT,()=>{
    console.log('Server is running on port 8000');
})