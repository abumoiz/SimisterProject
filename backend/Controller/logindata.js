import loginStructureModel from "../Models/logindata.js";







export const createlogindata= async(req, res)=>{
    

     

try {
  console.log("in add controller")
  const {Name, Email,Password, Confirmpass }=req.body;
  const check = await loginStructureModel.findOne({Email: Email});
  if (check)
  {
    
    res.status(402).json({error:"User Already Exsists "});
   
  }
  const salt = await bcrypt.genSalt();//default value is 10
  const hashedPassword = await bcrypt.hash(Password,salt);
  
   const User = 
   {
    Name: Name,
    Email: Email,
    Password:hashedPassword,
    Confirmpass:hashedPassword,

   }
   const user = new loginStructureModel(User);

   const savedUser = await user.save();

   res.status(201).json(savedUser); // Send a response indicating success




     
  } 
  catch (error) {
    console.error("Error adding user:", error);
    res.status(500).json({ message: "Failed to add user" }); // Send an error response
  }
};

export const getlogin=async(req , res)=>{

    try{
        const productdata=await loginStructureModel.find();
         res.json(productdata);
         console.log(productdata)
    }
    catch (error){
    console.log("Not found in Data")
    
    }
    }





    export const deletelogin=async(req , res)=>{
        try{
            const {id} = req.params;
            console.log("delete products with id",id);
            await loginStructureModel.findByIdAndDelete(id);
            res.json({message:"delete successfully"});
            res.status(500).json({error:"internal server error"})
    
        }
        catch (error){
            console.error("error delete products",error);
        }
    }
    





    export const updatelogin = async (req, res) => {
        const { id } = req.params;
        const { Name, Email, Password, Confirm } = req.body;
        try {
          const updatedlogin = await loginStructureModel.findByIdAndUpdate(
            id,
            { Name , Email ,Password , Confirm },
            { new: true }
          );
          if (updatedlogin) {
            res.sendStatus(204);
          } else {
            res.status(404).json({ error: 'login not found' });
          }
        } catch (error) {
          res.status(500).json({ error: 'Internal server error' });
        }
      };