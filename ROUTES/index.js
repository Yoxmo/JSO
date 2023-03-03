const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  return res.sendFile('index.html', { root: './SOURCE/STATIC/' })
});


module.exports = router;
