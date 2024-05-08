import express from "express";
// import { verifyAdmin } from "../Token/verifyToken.js";
import { body } from "express-validator";

import { signUp, signIn, updateDetails } from "../Controller/admin.controller.js";

let router = express.Router();

router.post("/signUp"
    , body(`email`, `Invalid email`).notEmpty().isEmail()
    , body(`password`).notEmpty().isStrongPassword({ minLength: 5 })
    , signUp);

router.post("/signIn"
    , body(`email`, `Invalid email`).notEmpty().isEmail()
    , body(`password`).notEmpty().isStrongPassword({ minLength: 5 })
    // , verifyAdmin
    , signIn);

router.post('/update'
    ,  updateDetails);
// View

export default router;

// abc-123456 = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFiYyIsInBhc3N3b3JkIjoiMTIzNDU2IiwiYWRtaW5faWQiOiIxIiwiaWF0IjoxNzEyNzI5Njk0fQ.MckWnx1sad9QeEzLCSEknEAEC3R93WJ1j7npaFkJrUU
// test@gmail.com-123456 = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJhZG1pbl9pZCI6IjIiLCJpYXQiOjE3MTI4MTIyNDF9.rtB1u3Yug51GeEjOLsFUwDyU4g9MA3fZp2kyM5gdHC0