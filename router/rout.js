const {
  empShow,
  getUpdate,
  empInsert,
  empUpdate,
  empDelete,
} = require("../controller/empController");
const express = require("express");
const router = express.Router();

router.get("/", empShow);
router.get("/getupdate/:id", getUpdate);
router.post("/add", empInsert);
router.patch("/update/:id", empUpdate);
router.delete("/delete/:id", empDelete);

module.exports = router;
