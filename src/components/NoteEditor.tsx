import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import { Form, Submit } from "payload/components/forms";
import { MinimalTemplate, Button } from "payload/components";
import { AdminView } from "payload/config";
import { useConfig } from "payload/components/utilities";
import { ToastContainer, toast, Slide } from "react-toastify";

import "./Components.scss";

const NoteEditor: AdminView = () => {
  const history = useHistory();

  const location = useLocation();
  const noteToEdit = location?.state?.note;
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

  return (
    <>
      <MinimalTemplate style={{ display: "flex" }}>
        <header>
          <h3>{`${isCreateNote ? `New` : `Edit`} Note`}</h3>
        </header>
        <Form onSubmit={onSubmit}>
          <Submit>{`${isCreateNote ? `Create` : `Update`}`}</Submit>
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
