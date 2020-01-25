const express = require('express');
const mongoose = require('mongoose');
const routes = require('../src/routes');
const http = require('http');
const cors = require ('cors');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-iadxk.mongodb.net/weak10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);