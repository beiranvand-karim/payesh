'use strict';

const Router = require('koa-router');

const { readData } = require('./controllers/readData');


const router = new Router();

router.get('/data/:value', readData);


module.exports = router;
