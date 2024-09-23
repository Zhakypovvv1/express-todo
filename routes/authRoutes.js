import express from "express";
import { validateErrors } from "../middlewares/validateErrors.js";
import { registerController } from "../controllers/auth/registerController.js";
import { authorizationController } from "../controllers/auth/authorizationController.js";

const authRoutes = express.Router();

authRoutes.post("/register", validateErrors, registerController);
authRoutes.post("/authorization", authorizationController);

export default authRoutes;

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZ21haWwuY29tIiwidXNlcklkIjoiNjZjZGY5OWJlZDNlMWFlZTQ2ODU0MDdjIiwiaWF0IjoxNzI0Nzc0ODExfQ.KfriMCx0H2b540W66fzdFJB3YvKzzvhKP5XgUpSaW0I