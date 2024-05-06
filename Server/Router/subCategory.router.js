import express from "express";
import { addSubCategory, getSubCategoryByCategory, allSubCategory, removeSubCategory } from "../Controller/SubCategory.controller.js";

let router = express.Router();

router.post('/add', addSubCategory);
router.delete('/remove', removeSubCategory);
router.post("/byCategory", getSubCategoryByCategory);
router.get("/all", allSubCategory);

// update subcategory

export default router;