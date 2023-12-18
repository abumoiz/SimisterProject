import axios from "axios";


const url= "http://localhost:5000";

// login

export const addLogindata=async(login)=>{
    console.log(login);
    return await axios.post(`${url}/Registration`,login);
}


export const getlogin=async ()=>{
    return await  axios.get(`${url}/Update_Form`);
  }
  
  export const deleteCustomerbyid=async (id)=>{
    return await  axios.delete(`${url}/Update_Form/${id}`);
  }
  
  
  export const updateloginById = async (id, updatedProduct) => {
     return await axios.put(`${url}/Update_Form/${id}`, updatedProduct);
  }