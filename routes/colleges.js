const express = require("express");
const router = express.Router();
const College = require("../models/colleges");

router.post("/", async (req, res) => {
  const college = new College({
    name: req.body.name,
    campus_name: req.body.campus_name,
    city: req.body.city,
    state: req.body.state,
  });
  try {
    const c1 = await college.save();
    res.json(c1);
  } catch (err) {
    res.send(err);
  }
});
router.get("/all", async (req, res) => {
  try {
    const collegeD = await College.find();
    res.json(collegeD);
    // console.log(collegeD[0].toObject().name)
    // const outD = collegeD.map(Cname => Cname.name)
    // console.log(outD)
  } catch (err) {
    console.log("Error " + err);
  }
});
router.get("/", async (req, res) => {
    try {
      const collegeD = await College.find();
      res.json(collegeD.length);
    } catch (err) {
      console.log("Error " + err);
    }
  });
router.get("/all/:city", async (req, res) => {
  try {
    const collegeD = await College.find({ city: req.params.city });
    res.json(collegeD);
  } catch (err) {
    console.log("Error " + err);
  }
});
router.get("/all/:campus_name", async (req, res) => {
    try {
      const collegeD = await College.find({ campus_name: req.params.campus_name });
      res.json(collegeD);
    } catch (err) {
      console.log("Error " + err);
    }
  });
  router.get("/all/:name", async (req, res) => {
    try {
      const collegeD = await College.find({ name: req.params.name });
      res.json(collegeD);
    } catch (err) {
      console.log("Error " + err);
    }
  });
  router.get("/all/:state", async (req, res) => {
    try {
      const collegeD = await College.find({ state: req.params.state });
      res.json(collegeD);
    } catch (err) {
      console.log("Error " + err);
    }
  });
module.exports = router;
