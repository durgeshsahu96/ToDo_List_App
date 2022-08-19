const express = require("express");
// Express router to fetch controller
const router = express.Router();
// Fetching homeController of page
const homeController = require("../controllers/home_controller");

// Route to create Task
router.post("/create", homeController.create);
// Route to delete Task
router.use("/delete", homeController.delete);
// Route to Home page
router.use("/", homeController.home);

module.exports = router;