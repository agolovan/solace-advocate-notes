import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import { Form, Submit, Text, Select } from "payload/components/forms";
import { MinimalTemplate, Button } from "payload/components";
import { AdminView } from "payload/config";
import { useConfig } from "payload/components/utilities";
import { ToastContainer, toast, Slide } from "react-toastify";
import {
  minNoteChars,
  maxNoteChars,
  typeOptions,
} from "../constants/validations";
import { INotesSchema } from "../schema/noteCollectionSchema";

import "./Components.scss";

const NoteEditor: AdminView = () => {
  const history = useHistory();

  const location = useLocation();
  const noteToEdit = location?.state?.note as INotesSchema;
  const clientAndTitleData = location?.state?.clientAndTitleData;
  console.log(noteToEdit);
  console.log(clientAndTitleData);

  const isCreateNote = typeof noteToEdit === "undefined";

  const {
    routes: { admin: adminRoute },
  } = useConfig();

  const onSubmit = async () => {
    try {
      history.push({
        pathname: `${adminRoute}/advocate-notes`,
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

  const deleteModel = () => {
    history.push({
      pathname: `${adminRoute}/advocate-notes`,
    });
  };
  const cancelOperation = () => {
    history.push({
      pathname: `${adminRoute}/advocate-notes`,
    });
  };

  const getInitialData = () => ({
    title: noteToEdit.title,
    note: noteToEdit.title,
    client: noteToEdit.client,
    type: noteToEdit.type,
  });

  return (
    <>
      <MinimalTemplate style={{ display: "flex" }}>
        <header>
          <h3>{`${isCreateNote ? `New` : `Edit`} Note`}</h3>
        </header>
        <Form onSubmit={onSubmit} initialData={getInitialData()}>
          <Submit>{`${isCreateNote ? `Create` : `Update`}`}</Submit>
          <Text name="title" label="Title" required />
          <Text
            name="note"
            label="Note"
            required
            minLength={minNoteChars}
            maxLength={maxNoteChars}
          />
          <Text name="client" label="Client Email" required />
          <Select name="type" label="Type" required options={typeOptions} />
        </Form>
        <Button buttonStyle="secondary" onClick={deleteModel}>
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
      <ToastContainer
        containerId="customToastContainer"
        position="bottom-center"
        transition={Slide}
        icon={false}
        newestOnTop
      />
    </>
  );
};

export default NoteEditor;