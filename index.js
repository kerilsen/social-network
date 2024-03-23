const mongoose = require('mongoose');
const User = require('./models/User');

const connection = require('./config/connection');
const seed = require('./db/seed');


seed();
