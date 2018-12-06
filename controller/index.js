"use strict";
const express = require('express');
const router = express.Router();
const config = require('../bin/config');


router.get("/", async (req, res, next) => {
    res.render("index", config);
});

module.exports = router;