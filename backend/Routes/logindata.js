import express from "express";
import { createlogindata, deletelogin, getlogin, updatelogin } from "../Controller/logindata.js"


const router = express.Router();

router.post('/', createlogindata);

router.get('/', getlogin);

router.delete("/:id", deletelogin);

router.put("/:id", updatelogin);

export default router;