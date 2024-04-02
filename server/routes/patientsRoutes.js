import express from "express";
import {AddNewPatient,ShowPatientById,ShowAllPatients} from "../controllers/patientsController.js"

const router = express.Router();

router.route("/AddPatient").post(AddNewPatient);
router.route("/GetPatients").get(ShowAllPatients);
router.route("/GetPatientByUserId/:UserId").post(ShowPatientById);


export default router