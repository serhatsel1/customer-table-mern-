import express from "express";

import * as userController from "../controllers/user.js";

const router = express.Router();

router.get("/", userController.getUsers);
router.get("/:id", userController.getSingleUser);
router.delete("/:id", userController.deleteUser);
router.post("/", userController.createUser);
router.put("/:id", userController.editUser);

export default router;
