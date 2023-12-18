import loginStructureModel from "../Models/logindata.js";
export const createlogindata= async(req, res)=>{
    const {Name, Email,Password, Confirmpass }=req.body;

     const newLogin = new loginStructureModel({
        Name,
        Email,
        Password,
        Confirmpass,

     });

try {
         await newLogin.save();
         res.json(newLogin);
     } catch (error) {
         console.log("Not Saved...");
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