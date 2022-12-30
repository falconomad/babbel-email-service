import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const emailRoute = require("./src/app/routes/email.route");
const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json());

app.use("/", emailRoute);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
