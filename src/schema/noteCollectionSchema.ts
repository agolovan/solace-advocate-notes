import mongoose from "mongoose";

export const notesSchema = {
  advocate: String,
  client: String,
  title: String,
  text: String,
  type: String,
  createdBy: String,
  createdAt: Date,
};

export interface INotesSchema {
  advocate: string;
  client: string;
  title: string;
  text: string;
  type: string;
  createdBy: string;
  createdAt: Date;
}

export const NotesCollectionSchema = new mongoose.Schema(notesSchema);

const NotesCollectionModel = mongoose.model(
  "advocate-notes",
  NotesCollectionSchema
);

export default NotesCollectionModel;
