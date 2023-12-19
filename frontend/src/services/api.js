import axios from "axios";


const url= "https://simister-project.vercel.app";

export const addProduct=async(formdata)=>{
  return await axios.post(`${url}/Add_Form`,formdata);
}

export const getproduct = async() => {
  return await axios.get(`${url}/View_Form`)
}


export const deletproductById = async(product) => {
  return await axios.delete(`${url}/View_Form/${product}`);
}

export const updateProductById = async(id, updatedProduct) => {
  return await axios.put(`${url}/View_Form/${id}`, updatedProduct);
}

// login

export const addLogindata=async(login)=>{
    console.log(login);
    return await axios.post(`${url}/Signup`,login);
}


export const getlogin=async ()=>{
    return await  axios.get(`${url}/Customers`);
  }
  
  export const deleteCustomerbyid=async (id)=>{
    return await  axios.delete(`${url}/Customers/${id}`);
  }
  
  
  export const updateloginById = async (id, updatedProduct) => {
     return await axios.put(`${url}/Customers/${id}`, updatedProduct);
  }