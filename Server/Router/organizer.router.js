import express, { response } from "express";
import {profile, signIn, signUp } from "../Controller/organizer.controller.js";

let router = express.Router();

router.post("/signUp", signUp);
router.post("/signIn", signIn);
router.post('/viewProfile', profile);
// Update
// viewProfile
// Delete

router.use(() => {
    return response.send("Wrong request....");
});

export default router;
