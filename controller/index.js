"use strict";
const express = require('express');
const router = express.Router();
const config = require('../bin/config');

router.get("/alex", async (req, res, next) => {

    res.render("alex", { test: 'Heia Goon 1!!' });
});

router.get("/", async (req, res, next) => {
    res.render("index", config);
});

module.exports = router;