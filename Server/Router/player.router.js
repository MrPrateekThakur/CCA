import express from "express";
import multer from "multer";
import { body } from "express-validator";

import { signUp, signIn, searchByCategory, searchAllPlayer, update, viewAllUser, viewUser, removeUser, requestToPlayer } from "../Controller/player.controller.js";
import { verifyAdmin, verifyUser } from "../Token/verifyToken.js";

let upload = multer({ dest: 'public/' });
let router = express.Router();

router.post("/signUp",
    // body(`email`, `Invalid email`).isEmail().notEmpty().isAlpha(),
    // body(`password`, `Invalid password`).notEmpty().isLength({ min: 5, max: 12 }),
    // body(`first_name`, `Invalid first name`).notEmpty().isAlpha(),
    // body(`last_name`, `Invalild Last name`).notEmpty().isAlpha(),
    // body(`age`, `Invalid age`).notEmpty().isNumeric(),
    // body(`height`, `Invalid height`).notEmpty().isNumeric(),
    // body(`is_active`, `Invalid active`).notEmpty(),
    // body(`address`, `Invalid address`).notEmpty(),
    // body(`no_of_matches`, 'Invalid no Of matches').notEmpty().isNumeric(),
    // body(`category_id`, `Invalid category`).notEmpty(),
    // body(`description`, `Invalid category`).notEmpty(),
    // upload.single('image'),
    signUp);

router.post("/signIn",
    body(`email`, `Invalid email`).isEmail().notEmpty(),
    body(`password`, `Invalid password`).notEmpty(),
    body(`password`, `Length of password must be is between 5 and 12`).isLength({ min: 5, max: 12 }),
    // verifyUser,
    signIn);

router.put('/update',
    // verifyUser,
    update);

router.get("/viewAll", viewAllUser);

router.post("/viewParticular",
    body(`email`, `Invalid email`).isEmail().notEmpty().isAlpha(),
    viewUser);

router.delete("/removePlayer",
    body(`email`, `Invalid email`).isEmail().notEmpty().isAlpha(),
    verifyAdmin,
    removeUser);

router.post('/sendRequest', requestToPlayer);
router.post('/search', searchAllPlayer);
router.post('/searchByCategory', searchByCategory);

// request accept/reject

export default router;