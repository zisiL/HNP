import express from "express";

import {ShowAllUsers,   AddNewUser, DeleteUserById,  showUserById,UpdateUser} from '../controllers/userController.js'
const router = express.Router();
router.route("/GetUsers").get(ShowAllUsers);
router.route("/AddUser").post(AddNewUser);
router.route("/GetUserById").post(showUserById);
router.route("/DeleteUser/:UserId").delete(DeleteUserById)
router.route("/UpdateUser").put(UpdateUser)
export default router;


