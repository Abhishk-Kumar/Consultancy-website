import express from "express";
import {
  getUserDetails,
  login,
  logoutPatient,
  patientRegister,
} from "../controller/userController.js";
import {
  isPatientAuthenticated,
} from "../middlewares/auth.js";

const router = express.Router();

router.post("/patient/register", patientRegister);
router.post("/login", login);
router.get("/patient/me", isPatientAuthenticated, getUserDetails);
router.get("/patient/logout", isPatientAuthenticated, logoutPatient);

export default router;
