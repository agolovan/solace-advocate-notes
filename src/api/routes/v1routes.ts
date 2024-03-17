import * as express from "express";
import mongoose from "mongoose";
import NotesCollectionModel from "../../schema/noteCollectionSchema";
import { NOTES_COLLECTION } from "../../constants/routes";

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

router.route(`/${NOTES_COLLECTION}`).get(getNotes).delete(deleteNote);

export default router;
