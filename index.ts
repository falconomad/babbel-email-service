import express from "express";
import { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json());

app.post("/email", (req: Request, res: Response) => {
  const { fullname, domain } = req.body;
  if (!fullname || !domain) {
    res.status(400).send({ error: "Name and domain are required parameters" });
    return;
  }
  const email = generateEmailFromName(fullname, domain);
  res.send({ email });
});

function generateEmailFromName(name: string, domain: string): string {
  const words = name.split(" ");
  const firstName = words[0];
  const lastName = words[words.length - 1];
  return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`;
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
