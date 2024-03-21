const { Router } = require("express");
const { testController } = require("../controllers");
const {
  moviesController,
  movieCreate,
} = require("../controllers/moviesController");

const router = Router();

//router.get("/movies", testController);
router.get("/movies", moviesController);
router.post("/movies", movieCreate);

module.exports = router;
