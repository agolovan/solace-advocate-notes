/* eslint-disable import/no-extraneous-dependencies */
import mongoose from "mongoose";

export const notesSchema = {
  advocate: String,
  note: {
    client: String,
    title: String,
    text: String,
    type: String,
  },
  createdBy: String,
  createdAt: Date,
};

// enum NoteType {
//   appoinment,
//   contract,
// }

export interface INotesSchema {
  advocate: string;
  client: string;
  title: string;
  notes: string;
  type: string;
  createdBy: string;
  createdAt: Date;
}

export const NotesCollectionSchema = new mongoose.Schema(notesSchema);

const NotesCollectionModel = mongoose.model(
  "notesCollection",
  NotesCollectionSchema
);

export default NotesCollectionModel;
