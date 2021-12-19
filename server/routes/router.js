const express = require('express')
const route = express.Router()


const services = require('../services/render');

/**
 *  @description Root Route
 *  @method GET /
 */

route.get('/',services.homeRoutes);

/**
 *  @description addlogs
 *  @method GET / addlogs
 */

route.get('/addlogs',services.addlogs)

/**
 *  @description updatelogs
 *  @method GET / updatelogs
 */

route.get('/updatelogs',services.updatelogs)

module.exports = route 