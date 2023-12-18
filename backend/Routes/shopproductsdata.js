import express from "express";
import multer from "multer";
import { createproductdata, deleteProduct, getproductdata, updateProduct } from "../Controller/shopproductsdata.js";


const router = express.Router();

const storage= multer.diskStorage({
    destination:function(req,file, cb){
        cb(null, './Images/');
    },
    filename:function(req, file, cb){
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload= multer({storage: storage});


router.post("/",upload.single('productImage'), createproductdata );

router.get('/',getproductdata);
router.delete("/:productId",deleteProduct);
router.put("/:id",updateProduct);




export default router;