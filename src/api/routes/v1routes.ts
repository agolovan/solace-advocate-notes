import * as express from "express";
import mongoose from "mongoose";
import NotesCollectionModel from "../../schema/noteCollectionSchema";
import { NOTES_COLLECTION } from "../../constants";

const { ObjectId } = mongoose.Types;

const router = express.Router();

export const getNotes = async (req, res) => {
  try {
    const { email } = req.query;
    const query = { advocate: email };
    const notesData = await NotesCollectionModel.find(query);
    res.send(notesData);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

export const createOrUpdateNote = async (req, res) => {
  try {
    const note = req.body;

    const newNode = {
      advocate: note.advocate,
      title: note.title,
      note: note.note,
      client: note.client,
      type: note.type,
      createdAt: note.createdAt,
      createdBy: note.createdBy,
    };

    const newNodeCollection = new NotesCollectionModel(newNode);

    // eslint-disable-next-line no-underscore-dangle
    const currentId = note._id;
    if (typeof currentId !== "undefined") {
      // Update existing note
      const doc = await NotesCollectionModel.findById(currentId);
      if (!doc) {
        res.status(500).send(`Note id ${currentId} not found `);
        return;
      }

      const result = await doc.update(newNode);
      console.log(result);
    } else {
      // Create new note
      const result = await newNodeCollection.save();
      console.log(result);
    }
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

export const deleteNote = async (req, res) => {
  try {
    const { id } = req.body;
    const result = await NotesCollectionModel.deleteOne({
      _id: ObjectId.createFromHexString(id),
    });
    if (result?.acknowledged) {
      res.sendStatus(200);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

router
  .route(`/${NOTES_COLLECTION}`)
  .get(getNotes)
  .post(createOrUpdateNote)
  .delete(deleteNote);

export default router;
