const express = require("express");
const path = require("path");
const fs = require("fs");
const util = require("util");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

