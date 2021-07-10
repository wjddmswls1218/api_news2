import {
  homeController,
  socialController,
  economyController,
  politicsController,
} from "../controller/globalController";
import express from "express";

const globalRouter = express.Router();

globalRouter.get("/", homeController);

globalRouter.get("/economy", economyController);
globalRouter.get("/social", socialController);
globalRouter.get("/politics", politicsController);

export default globalRouter;
