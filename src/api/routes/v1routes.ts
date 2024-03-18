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

export const createNote = async (req, res) => {
  try {
    const note = req.body;
    const newNodeCollection = new NotesCollectionModel({
      advocate: note.advocate,
      title: note.title,
      note: note.note,
      client: note.client,
      type: note.type,
      createdAt: note.createdAt,
      createdBy: note.createdBy,
    });

    const result = await newNodeCollection.save();
    console.log(`Updated Collection result: ${JSON.stringify(result)}`);
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
  .post(createNote)
  .delete(deleteNote);

export default router;
