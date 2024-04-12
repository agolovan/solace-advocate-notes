import React from "react";
import { useLocation } from "react-router-dom";
import { Form, Submit, Text, Select } from "payload/components/forms";
import { MinimalTemplate, Button } from "payload/components";
import { AdminView } from "payload/config";
import {
  MIN_NOTE_CHARS,
  MAX_NOTE_CHARS,
  typeOptions,
  EMAIL_REGEX,
  VALIDATION_EMAIL_ADDRESS,
} from "../constants";
import { INotesSchema } from "../schema/noteCollectionSchema";
import { deleteNote, createAndUpdateNote } from "../utils/REST";
import useRedirectLogin from "./RedirectLogin";

import "./Components.scss";

const NoteEditor: AdminView = () => {
  const { user, adminRoute, history } = useRedirectLogin();

  const location = useLocation();

  const noteToEdit = location?.state?.note as INotesSchema;
  const isCreateNote = typeof noteToEdit === "undefined";

  const onSubmit = async (fields: any) => {
    try {
      const newNote = {
        // eslint-disable-next-line no-underscore-dangle
        _id: !isCreateNote ? noteToEdit._id : undefined,
        advocate: user.email,
        title: fields.title.value,
        note: fields.note.value,
        client: fields.client.value,
        type: fields.type.value,
        createdAt: new Date().toUTCString(),
        createdBy: user.email,
      };

      await createAndUpdateNote(newNote);

      history.push({
        pathname: `${adminRoute}/advocate-notes`,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteOperation = async () => {
    // eslint-disable-next-line no-underscore-dangle
    await deleteNote(noteToEdit._id);
    history.push({
      pathname: `${adminRoute}/advocate-notes`,
    });
  };

  const cancelOperation = () => {
    history.push({
      pathname: `${adminRoute}/advocate-notes`,
    });
  };

  const loadInitialData = () => ({
    title: noteToEdit.title,
    note: noteToEdit.note,
    client: noteToEdit.client,
    type: noteToEdit.type,
  });

  const validateEmail = (value: string): string | true => {
    const isValidEmailAddress = EMAIL_REGEX.test(value);
    return !isValidEmailAddress ? VALIDATION_EMAIL_ADDRESS : true;
  };

  return (
    <MinimalTemplate style={{ display: "flex" }}>
      <header>
        <h3>{`${isCreateNote ? `New` : `Edit`} Note`}</h3>
      </header>
      <Form
        onSubmit={onSubmit}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...(!isCreateNote ? { initialData: loadInitialData() } : {})}
      >
        <Submit>{`${isCreateNote ? `Create` : `Update`}`}</Submit>
        <Text name="title" label="Title" required />
        <Text
          name="note"
          label="Note (min 20, max 300)"
          required
          minLength={MIN_NOTE_CHARS}
          maxLength={MAX_NOTE_CHARS}
        />
        <Text
          name="client"
          label="Client Email"
          validate={validateEmail}
          required
        />
        <Select name="type" label="Type" required options={typeOptions} />
      </Form>
      <Button
        buttonStyle="secondary"
        onClick={deleteOperation}
        disabled={isCreateNote}
      >
        Delete
      </Button>
      <Button
        buttonStyle="secondary"
        className="cancel-button"
        onClick={cancelOperation}
      >
        Cancel
      </Button>
    </MinimalTemplate>
  );
};

export default NoteEditor;
