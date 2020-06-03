const db = require('../db');
const ObjectID = require('mongodb').ObjectID;

exports.all = (cb) => {
  db.get().collection('technologies').find().toArray((err, list) => cb(err, list))
};

exports.findById = (id, cb) => {
  db.get().collection('technologies').findOne({'_id': ObjectID(id)}, (err, list) => cb(err, list))
};

exports.create = (fruit, cb) => {
  db.get().collection('technologies').insert(fruit, (err, list) => cb(err, list))
};

exports.delete = (id, cb) => {
  db.get().collection('technologies').deleteOne({'_id': ObjectID(id)}, (err, list) => cb(err, list))
};