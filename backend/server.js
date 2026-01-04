/**
 *  Backend configuration
 */
const dotenv = require("dotenv").config();
const keys = require ("./config/keys");
const Port = keys.PORT || 5004;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const cors = require("cors");
const userRoutes = require("./routes/user.js");