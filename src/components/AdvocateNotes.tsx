import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AdminView } from "payload/config";
import { useConfig } from "payload/components/utilities";
import { DefaultTemplate } from "payload/components/templates";
import { Button } from "payload/components";
import { fetchNotesClient } from "../utils/fetchNotes";
import { INotesSchema } from "../schema/noteCollectionSchema";
import { displayDateTime } from "../utils/utils";

import "./Components.scss";

// eslint-disable-next-line react/prop-types
const AdvocateNotes: AdminView = ({ user }) => {
  const [notes, setNotes] = useState<Array<INotesSchema>>([]);
  const history = useHistory();

  const {
    routes: { admin: adminRoute },
  } = useConfig();

  useEffect(() => {
    const fetchNotes = async () => {
      // eslint-disable-next-line react/prop-types
      const totalNotes = await fetchNotesClient(user.email);
      setNotes(totalNotes);
    };

    if (typeof user !== "undefined") {
      fetchNotes();
    }
  }, [user]);

  const clientAndTitleData = notes.map(({ client, title }) => ({
    client,
    title,
  }));

  const displayNotes = notes?.map((note) => (
    <tr className="row-1" key={note.client + note.title}>
      <td className="cell-client">
        <Button
          className="buttonLink"
          onClick={() => {
            history.push({
              pathname: `${adminRoute}/advocate-notes/note-editor`,
              state: {
                note,
                clientAndTitleData,
              },
            });
          }}
        >
          {note.title}
        </Button>
      </td>
      <td className="cell-title">
        <span>{note.type}</span>
      </td>
      <td className="cell-type">
        <span>{note.client}</span>
      </td>
      <td className="cell-type">
        <span>{displayDateTime(note.createdAt)}</span>
      </td>
    </tr>
  ));

  return (
    <DefaultTemplate>
      <div className="notesContainer">
        <header>
          <h3>My Notes</h3>
        </header>
        <div className="table">
          <table cellPadding="0" cellSpacing="0">
            <thead>
              <tr>
                <th id="heading-client">
                  <div className="sort-column">
                    <span className="sort-column__label">Title</span>
                  </div>
                </th>
                <th id="heading-title">
                  <div className="sort-column">
                    <span className="sort-column__label">Type</span>
                  </div>
                </th>
                <th id="heading-type">
                  <div className="sort-column">
                    <span className="sort-column__label">Client Email</span>
                  </div>
                </th>
                <th id="heading-type">
                  <div className="sort-column">
                    <span className="sort-column__label">Created</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>{displayNotes}</tbody>
          </table>
        </div>
        <Button
          onClick={() => {
            history.push({
              pathname: `${adminRoute}/advocate-notes/note-editor`,
              state: {
                clientAndTitleData,
              },
            });
          }}
        >
          New Note
        </Button>
      </div>
    </DefaultTemplate>
  );
};

export default AdvocateNotes;
