import express from "express";
 import {AddNewVaccination,ShowUserVaccinations,ShowUserVaccinationsNum,NumPeopleDidNotGet} from "../controllers/vaccinationsController.js"

const router = express.Router();
 router.route("/AddVaccination").post(AddNewVaccination);
 router.route("/GetUserVaccinations").post(ShowUserVaccinations);
 router.route("/ShowUserVaccinationsNum").post(ShowUserVaccinationsNum);

 router.route("/getNumPeopleDidntGetYet").get(NumPeopleDidNotGet);

export default router