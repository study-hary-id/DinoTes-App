/* eslint-disable no-console */
/*
  This file is used to configure all handler
  which is used in 'routes.js'
*/

const { ObjectId } = require('mongodb');

exports.addNote = async (req, res, next) => {
  const { notesCollection } = req.app.locals;
  const { title } = req.body;

  try {
    if (!title) {
      throw new Error('Title is missing');
    }

    const result = await notesCollection.insertOne(req.body);
    res.status(200).json('Data successfully saved');
    console.log(result);
  } catch (error) {
    next(error);
  }
};

exports.getNotes = async (req, res, next) => {
  const { notesCollection } = req.app.locals;

  try {
    const result = await notesCollection.find().toArray();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.getNote = async (req, res, next) => {
  const { notesCollection } = req.app.locals;

  try {
    const result = await notesCollection.findOne({ _id: ObjectId(req.params.id) });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

exports.updateNote = async (req, res, next) => {
  const { notesCollection } = req.app.locals;
  const { title, note } = req.body;

  try {
    if (!title) {
      throw new Error('Title is missing');
    }

    const result = await notesCollection.updateOne({ _id: ObjectId(req.params.id) }, { $set: { title, note } });

    res.status(200).json('Data successfully updated');
    console.log(result);
  } catch (error) {
    next(error);
  }
};

exports.deleteNote = async (req, res, next) => {
  const { notesCollection } = req.app.locals;

  try {
    const result = await notesCollection.deleteOne({ _id: ObjectId(req.params.id) });

    res.status(200).json('Data successfully deleted');
    console.log(result);
  } catch (error) {
    next(error);
  }
};
