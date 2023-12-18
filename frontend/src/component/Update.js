import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { getproduct, deletproductById, updateProductById } from "../services/api";

function Update() {
  const [productdetail, setproductdetail] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [updatedProduct, setUpdatedProduct] = useState({
    articlename: "",
    publisheddate: "",
    brand:"",
    Type: "",
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getProductdetail();
  }, []);

  const getProductdetail = async () => {
    try {
      const result = await getproduct();
      setproductdetail(result.data);
    } catch (error) {
      console.log("Error ", error);
    }
  };

  const deletProduct = async (id) => {
    try {
      await deletproductById(id);
      const updateProducts = productdetail.filter(
        (product) => product._id !== id
      );
      setproductdetail(updateProducts);
    } catch (error) {
      console.log("error deleting product", error);
    }
  };

  const handleUpdateProduct = (product) => {
    setEditProduct(product);
    setUpdatedProduct({
      articlename: product.articlename,
      publisheddate: product.publisheddate,
      brand: product.brand,
      Type: product.Type,
      productImage: null,
    });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    cancelUpdate();
  };

  const cancelUpdate = () => {
    setEditProduct(null);
    setUpdatedProduct({
      articlename: "",
      publisheddate: "",
      brand:"",
      Type: "",
    });
  };

  const updateProduct = async (productid) => {
    try {
      await updateProductById(productid, updatedProduct);
      getProductdetail(); // Refresh the product list
      handleCloseModal();
    } catch (error) {
      console.log("Error updating product", error);
    }
  };


  return (
    <>
      <Table striped bordered hover style={{width:"1100px" }}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Article Title</th>
            <th>Published Date</th>
            <th></th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {productdetail.map((details, index) => (
            <tr key={index}>
              <td>
                <img
                  style={{ width: "4rem", height: "5rem" }}
                  src={`http://localhost:5000/${details.productImage}`}
                  alt={`Product ${details.articlename}`}
                />
              </td>
              <td>
                {editProduct === details._id ? (
                  <input
                    type="text"
                    value={updatedProduct.articlename}
                    onChange={(e) =>
                      setUpdatedProduct({
                        ...updatedProduct,
                        articlename: e.target.value,
                      })
                    }
                  />
                ) : (
                  details.articlename
                )}
              </td>
              <td>
                {editProduct === details._id ? (
                  <input
                    type="number"
                    value={updatedProduct.publisheddate}
                    onChange={(e) =>
                      setUpdatedProduct({
                        ...updatedProduct,
                        publisheddate: e.target.value,
                      })
                    }
                  />
                ) : (
                  details.publisheddate
                )}
              </td>

              <td>
                {editProduct === details._id ? (
                  <input
                    type="text"
                    value={updatedProduct.brand}
                    onChange={(e) =>
                      setUpdatedProduct({
                        ...updatedProduct,
                        brand: e.target.value,
                      })
                    }
                  />
                ) : (
                  details.brand
                )}
              </td>

              <td>
                {editProduct === details._id ? (
                  <input
                    type="text"
                    value={updatedProduct.Type}
                    onChange={(e) =>
                      setUpdatedProduct({
                        ...updatedProduct,
                        Type: e.target.value,
                      })
                    }
                  />
                ) : (
                  details.Type
                )}
              </td>
              <td>
                {editProduct === details._id ? (
                  <>
                    <button onClick={() => updateProduct(details._id)}>
                      Save
                    </button>
                    <button onClick={handleCloseModal}>Cancel</button>
                  </>
                ) : (
                  <button style={{width:"100px" , height:"50px" , borderRadius:"15px" , marginLeft:"20px", borderWidth:"5px"}} onClick={() => handleUpdateProduct(details)}>
                    Update
                  </button>
                )}
                <button style={{width:"100px" , height:"50px" , borderRadius:"15px" , marginLeft:"20px", borderWidth:"5px"}} onClick={() => deletProduct(details._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Your form fields for updating data */}
         
      <form >
        
        <div className="form-group" style={{ marginBottom: "15px" }}> 
          <label htmlFor="articlename" style={{ display: "block", fontWeight: "bold" }}>Product Name:</label>
          <input
            type="text"
            value={updatedProduct.articlename}
            onChange={(e)=>
              setUpdatedProduct({
                ...updatedProduct,
                articlename: e.target.value,
              })
            }
            style={{width:"100%",padding:"8px",outline: "none",fontSize:"14px",border:"1px solid #ccc",borderRadius:"3px",boxSizing:"border-box"}}
          />
        </div>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label htmlFor="publisheddate" style={{ display: "block", fontWeight: "bold" }}>Published Date:</label>
          <input
            type="number"
            value={updatedProduct.publisheddate}
            onChange={(e)=>
              setUpdatedProduct({
                ...updatedProduct,
                publisheddate: e.target.value,
              })
            }
            style={{width:"100%",padding:"8px",outline: "none",fontSize:"14px",border:"1px solid #ccc",borderRadius:"3px",boxSizing:"border-box"}}
          />
        </div>















{/* 
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label htmlFor="brand" style={{ display: "block", fontWeight: "bold" }}>Product Brand:</label>
          <input
            type="text"
            value={updatedProduct.brand}
            onChange={(e)=>
              setUpdatedProduct({
                ...updatedProduct,
                brand: e.target.value,
              })
            }
            style={{width:"100%",padding:"8px",outline: "none",fontSize:"14px",border:"1px solid #ccc",borderRadius:"3px",boxSizing:"border-box"}}
          />
        </div>

        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label htmlFor="publisheddate" style={{ display: "block", fontWeight: "bold" }}>Published Date:</label>
          <input
            type="text"
            value={updatedProduct.Type}
            onChange={(e)=>
              setUpdatedProduct({
                ...updatedProduct,
                Type: e.target.value,
              })
            }
            style={{width:"100%",padding:"8px",outline: "none",fontSize:"14px",border:"1px solid #ccc",borderRadius:"3px",boxSizing:"border-box"}}
          />
        </div>

 */}











        {/*For image updating */}

        {/* <div className="form-group" style={{ marginBottom: "15px" }}>
          <label htmlFor="productImage" style={{ display: "block", fontWeight: "bold"}}>Product Image:</label>
          <input
            type="file"
            id="productImage"
            name="productImage"
            onChange={(e)=>setUpdatedProduct({
              ...updatedProduct,
              productImage: e.target.files[0],
            })}
            required
            style={{width:"100%",padding:"8px",outline: "none",fontSize:"14px",border:"1px solid #ccc",borderRadius:"3px",boxSizing:"border-box"}}
          />
        </div> */}

        

      </form>

        {/* Repeat the above pattern for other fields */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={() => updateProduct(editProduct._id)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Update;