import React, { useState} from "react";
import { addProduct } from "../services/api";

function Add() {

  

  // const [product, setProduct] = useState({
  //   Type:"",
  //   articlename: "",
  //   publisheddate: "",
  //   description:"",
  // });




  const initialProductState = {
    Type: "",
    articlename: "",
    publisheddate: "",
    description: "",
  };


  const [product, setProduct] = useState(initialProductState);

  const [selectedFile, setSelectedFile] = useState(null);

  const { articlename, publisheddate,description } = product;

  const handleInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formdata = new FormData();
      formdata.append("Type", product.Type);
      formdata.append("articlename", articlename);
      formdata.append("publisheddate", publisheddate);
      formdata.append("description",description)
      formdata.append("productImage", selectedFile);

      await addProduct(formdata);
      alert("Data is Successfully added");


      setProduct(initialProductState);
      setSelectedFile(null);
    } 



    catch (error) {
    console.log("Not saved...", error);
  }

};

  return (
    <div
      className="add-product-form"
      style={{
        width: "400px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        boxShadow: "0px 0px 10px 0px rgba()0, 0, 0, 0.1",
      }}
    >
      <h2 style={{color:"black"}}>Add Article</h2>

      <form>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label
            htmlFor="articlename"
            style={{ display: "block", fontWeight: "bold" , color:"black" }}
          >
            Article Title
          </label>
          <input
            type="text"
            name="articlename"
            value={articlename}
            id="articlename"
            onChange={handleInputChange}
            required
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
              outline: "none",
              fontSize: "14px",
              borderRadius: "3px",
            }}
          />
        </div>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label
            htmlFor="publisheddate"
            style={{ display: "block", fontWeight: "bold"  , color:"black"}}
          >
            Published Date:
          </label>
          <input
            type="Number"
            name="publisheddate"
            id="publisheddate"
            value={publisheddate}
            onChange={handleInputChange}
            required
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
              outline: "none",
              fontSize: "14px",
              borderRadius: "3px",
            }}
          />
        </div>



        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label
            htmlFor="description"
            style={{ display: "block", fontWeight: "bold" , color:"black" }}
          >
            Published By
          </label>
          <input
            type="text"
            name="description"
            id="description"
            value={description}
            onChange={handleInputChange}
            required
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
              outline: "none",
              fontSize: "14px",
              borderRadius: "3px",
            }}
          />
        </div>



        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label
            htmlFor="Type"
            style={{ display: "block", fontWeight: "bold" , color:"black" }}
          >
            Description:
          </label>
          <input
            type="text"
            name="Type"
            id="Type"
            value={product.Type}
            onChange={handleInputChange}
            required
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
              outline: "none",
              fontSize: "14px",
              borderRadius: "3px",
            }}
          />
        </div>

        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label
            htmlFor="productImage"
            style={{ display: "block", fontWeight: "bold"  , color:"black"}}
          >
            Add Image:
          </label>
          <input
            type="file"
            name="productImage"
            id="productImage"
            onChange={handleImageChange}
            multiple
            required
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
              outline: "none",
              fontSize: "14px",
              borderRadius: "3px",
            }}
          />
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          style={{
            backgroundColor: "#4caf50",
            color: "white",
            border: "none",
            borderRadius: "3px",
            padding: "10px 20px",
            cursor: "pointer",
            color:"black"
          }}
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default Add;