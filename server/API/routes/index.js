const express = require('express');
const router = express.Router();

const authenticationRouter = require("./authentication")
const userRouter = require("./user")


router.get("/",  (req, res) => {
  res.send("working API");
});

router.use("/user", userRouter);
router.use("/auth", authenticationRouter);


module.exports = router;


