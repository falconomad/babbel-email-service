import express from "express";
const router = express.Router();

import { generateEmail } from "../controllers/email.controller";

router.post("/email", generateEmail);

module.exports = router;
