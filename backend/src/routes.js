const { Router } = require('express');
const DevController = require('../src/controllers/DevController')
const SearchController = require('../src/controllers/SearchController')

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index)

module.exports = routes;
