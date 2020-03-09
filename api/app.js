const express = require('express');
const app = express();

const { mongoose } = require('./database/mongoose');

const bodyParser = require('body-parser');

// Load in the mongoose models
const { Task } = require('./database/models');