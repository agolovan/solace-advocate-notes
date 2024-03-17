import React, { useEffect, useState } from "react";
import { AdminView } from "payload/config";
import { DefaultTemplate } from "payload/components/templates";
import { fetchNotesClient } from "../utils/fetchNotes";
import { INotesSchema } from "../schema/noteCollectionSchema";
import { displayDateTime } from "../utils/utils";

import "./Components.scss";

// eslint-disable-next-line react/prop-types
const AdvocateNotes: AdminView = () => {
  const [notes, setNotes] = useState<Array<INotesSchema>>([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const totalNotes = await fetchNotesClient();
      setNotes(totalNotes);
    };

    fetchNotes();
  }, []);

  const displayNotes = notes?.map((note) => (
    <tr className="row-1">
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <td className="cell-client">
        <a href="/admin/collections/Advocatenotes/65f6370f9f8ab6d30bc5b90e">
          {note.title}
        </a>
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
                    <span className="sort-column__label">Client</span>
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
      </div>
    </DefaultTemplate>
  );
};

export default AdvocateNotes;
