import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from 'url';
import path from "path";
import cors from 'cors';

import adminRouter from "./Router/admin.router.js";
import playerRouter from "./Router/player.router.js";
import TournamentRouter from "./Router/tournament.router.js";
import organizerRouter from "./Router/organizer.router.js";
import teamRouter from "./Router/team.router.js";
import categoryRouter from './Router/category.router.js';
import subCategoryRouter from "./Router/subCategory.router.js";

import './Modal/Association.modal.js';

let app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

app.use(express.static(path.join(dirname, 'public')));
app.use(cors());

// Forgot password
app.use("/admin", adminRouter);
app.use("/player", playerRouter);
app.use("/tournament", TournamentRouter);
app.use("/organizer", organizerRouter);
app.use("/team", teamRouter);
app.use("/category", categoryRouter);
app.use("/subCategory", subCategoryRouter);

app.listen(port, () => {
    console.log("Server started on port", port);
});