import productStructureModel from "../Models/shopproductsdata.js";


    export const getproductdata = async(req , res )=>{
        try {
            const productData = await productStructureModel.find();
            res.json(productData);
            console.log(productData);
        } 
        catch (error) {
            console.log("Not found any data");
        }
    }

    export const createproductdata= async(req, res)=>{
       const {Type, articlename,publisheddate,description, productImage,category }=req.body;

        const newProduct = new productStructureModel({
            Type,
            articlename,
            publisheddate,
            productImage:req.file.path,
            description,
            category,

        });

 try {
            await newProduct.save();
            res.json(newProduct);
        } catch (error) {
            console.log("Not Saved...");
        }
};

export const deleteProduct = async (req, res) => {
    try {
      const { productId } = req.params;
      console.log("Deleting product with ID:", productId);
      await productStructureModel.findByIdAndDelete(productId);
      res.json({ message: 'Delete Successfully' });
    } catch (error) {
      console.error("Error deleting product:", error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };



  export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { articletname, Type, publisheddate, description } = req.body;
    try {
      const updatedProduct = await productStructureModel.findByIdAndUpdate(
        id,
        { articlename, Type, publisheddate, description },
        { new: true }
      );
      if (updatedProduct) {
        res.sendStatus(204);
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };