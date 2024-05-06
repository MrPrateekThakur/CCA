import express from "express";

import { removeCategory, addCategory, getCategory } from '../Controller/category.controller.js';
import { verifyAdmin } from "../Token/verifyToken.js";

let router = express.Router();

router.post('/add', addCategory);
router.delete('/remove', removeCategory);
router.get('/viewAll', getCategory);
// update category
// view category

export default router;