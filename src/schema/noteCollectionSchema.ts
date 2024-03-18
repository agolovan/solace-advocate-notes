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

export const modelSchema = {
  name: String,
  model: {
    slug: String,
    admin: Object,
    access: Object,
    fields: Array,
  },
  createdBy: String,
  createdAt: Date,
  version: Number,
};

export const NotesCollectionSchema = new mongoose.Schema(notesSchema);

const NotesCollectionModel = mongoose.model(
  NOTES_COLLECTION,
  NotesCollectionSchema
);

export const ModelCollectionSchema = new mongoose.Schema(modelSchema);

export const ModelCollectionModel = mongoose.model(
  "modelCollection",
  ModelCollectionSchema
);

export default NotesCollectionModel;
