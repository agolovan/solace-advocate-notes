import mongoose from "mongoose";
import { NOTES_COLLECTION } from "../constants";

export const notesSchema = {
  advocate: String,
  client: String,
  title: String,
  note: String,
  type: String,
  createdBy: String,
  createdAt: Date,
};

export interface INotesSchema {
  _id?: string;
  advocate: string;
  client: string;
  title: string;
  note: string;
  type: string;
  createdBy: string;
  createdAt: string;
}

export const NotesCollectionSchema = new mongoose.Schema(notesSchema);

const NotesCollectionModel = mongoose.model(
  NOTES_COLLECTION,
  NotesCollectionSchema
);

export default NotesCollectionModel;
