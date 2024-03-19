const { Router } = require("express");
const { testController } = require("../controllers");
const { moviesController } = require("../controllers/moviesController");

const router = Router();

router.get("/movies", testController);
router.get("/movies2", moviesController);

module.exports = router;
