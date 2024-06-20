import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();
// updating user route
router.put("/:id", verifyUser, updateUser);

// deleting user route
router.delete("/:id", verifyUser, deleteUser);

//get user route
router.get("/:id", verifyUser, getUser);

//get all users route
router.get("/", verifyAdmin, getUsers);

export default router;