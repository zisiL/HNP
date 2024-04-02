import express from "express";
import {AddNewManufacturer,ShowAllManufacturers} from "../controllers/ManufacturerController.js"

const router = express.Router();

router.route("/addManufacturer").post(AddNewManufacturer);
router.route("/showManufacturers").get(ShowAllManufacturers);
export default router