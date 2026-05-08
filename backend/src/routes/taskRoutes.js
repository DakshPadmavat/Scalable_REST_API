const express = require("express");

const {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
} = require("../controllers/taskController");

const auth = require("../middlewares/authMiddleware");

const router = express.Router();

router.use(auth);

router.get("/", getTasks);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;