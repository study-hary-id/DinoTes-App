/* eslint-disable no-console */
/*
  This file is used to configure all handler
  which is used in 'routes.js'
*/

const { ObjectId } = require('mongodb');
const { logger } = require('./utils/logger');

exports.addNote = async (req, res, next) => {
  const { notesCollection } = req.app.locals;
  const { title } = req.body;

  try {
    if (!title) {
      logger.error(`${req.originalUrl} - ${req.ip} - Title is missing`);
      throw new Error('Title is missing');
    }

    await notesCollection.insertOne(req.body);

    logger.info(`${req.originalUrl} - ${req.ip} - Data successfully saved`);

    res.status(200).json('Data successfully saved');
  } catch (error) {
    logger.error(`${req.originalUrl} - ${req.ip} - ${error}`);
    next(error);
  }
};

exports.getNotes = async (req, res, next) => {
  const { notesCollection } = req.app.locals;

  try {
    const result = await notesCollection.find().toArray();

    logger.info(`${req.originalUrl} - ${req.ip} - All notes retrieved`);

    res.status(200).json(result);
  } catch (error) {
    logger.error(`${req.originalUrl} - ${req.ip} - ${error}`);
    next(error);
  }
};

exports.getNote = async (req, res, next) => {
  const { notesCollection } = req.app.locals;

  try {
    const result = await notesCollection.findOne({ _id: ObjectId(req.params.id) });

    logger.info(`${req.originalUrl} - ${req.ip} - Notes retrieved`);

    res.status(200).json(result);
  } catch (error) {
    logger.error(`${req.originalUrl} - ${req.ip} - ${error}`);
    next(error);
  }
};

exports.updateNote = async (req, res, next) => {
  const { notesCollection } = req.app.locals;
  const { title, note } = req.body;

  try {
    if (!title) {
      logger.error(`${req.originalUrl} - ${req.ip} - Title is missing`);
      throw new Error('Title is missing');
    }

    await notesCollection.updateOne({ _id: ObjectId(req.params.id) }, { $set: { title, note } });

    logger.info(`${req.originalUrl} - ${req.ip} - Data sucessfully updated`);

    res.status(200).json('Data successfully updated');
  } catch (error) {
    logger.error(`${req.originalUrl} - ${req.ip} - ${error}`);
    next(error);
  }
};

exports.deleteNote = async (req, res, next) => {
  const { notesCollection } = req.app.locals;

  try {
    await notesCollection.deleteOne({ _id: ObjectId(req.params.id) });

    logger.info(`${req.originalUrl} - ${req.ip} - Data successfuly deleted`);

    res.status(200).json('Data successfully deleted');
  } catch (error) {
    logger.error(`${req.originalUrl} - ${req.ip} - ${error}`);
    next(error);
  }
};
