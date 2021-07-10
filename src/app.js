import express from "express";
import morgan from "morgan";
import axios from "axios";
import path from "path";
import bodyParser from "body-parser";
import globalRouter from "./router/globalRouter";

const app = express();
const PORT = 3003;

app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "/assets")));
app.use(morgan(`dev`));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", globalRouter);

app.listen(PORT, () => {
  console.log(`${PORT}ststst`);
});
