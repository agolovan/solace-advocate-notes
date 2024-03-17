import * as express from "express";
import NotesCollectionModel from "../../schema/noteCollectionSchema";
import { NOTES_COLLECTION } from "../../constants/routes";

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

router.route(`/${NOTES_COLLECTION}`).get(getNotes);

export default router;
