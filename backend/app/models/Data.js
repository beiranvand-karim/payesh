"use strict";

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const dataSchema = new Schema({
   value: { type: Number, required: true },
   date: { type: Date, required: true },
});

const Data = mongoose.model('data', dataSchema);

module.exports = Data;
