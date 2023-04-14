const express = require("express")
const  route = express.Router();
const  User = require('../Controller/User')

route.get('/',User.getData)

module.exports = route;