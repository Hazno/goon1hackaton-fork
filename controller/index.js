"use strict";
const express = require('express');
const router = express.Router();

router.get("/", async (req, res, next) => {

    res.render("index", { test: 'Heia Goon 1!!' });
});

module.exports = router;