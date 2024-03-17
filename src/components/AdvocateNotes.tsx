import React, { useEffect, useState } from "react";
import { AdminView } from "payload/config";
import { DefaultTemplate } from "payload/components/templates";
import { fetchNotesClient } from "../utils/fetchNotes";
import { INotesSchema } from "../schema/noteCollectionSchema";

import "./Components.scss";

// eslint-disable-next-line react/prop-types
const AdvocateNotes: AdminView = () => {
  // console.log(user);

  const [notes, setNotes] = useState<Array<INotesSchema>>([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const totalNotes = await fetchNotesClient();
      setNotes(totalNotes);
    };

    fetchNotes();
  }, []);

  console.log(notes);

  const displayNotes = notes?.map((note) => (
    <tr className="row-1">
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <td className="cell-select">
        <div className="custom-checkbox">
          <div className="custom-checkbox__input">
            <input type="checkbox" />
            <span className="custom-checkbox__icon check">
              <svg
                className="icon icon--check"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 25"
              >
                <path
                  d="M10.6092 16.0192L17.6477 8.98076"
                  className="stroke"
                  strokeLinecap="square"
                  strokeLinejoin="bevel"
                />
                <path
                  d="M7.35229 12.7623L10.6092 16.0192"
                  className="stroke"
                  strokeLinecap="square"
                  strokeLinejoin="bevel"
                />
              </svg>
            </span>
          </div>
        </div>
      </td>
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
    </tr>
  ));

  return (
    <DefaultTemplate>
      <div className="notesContainer">
        <header>
          <h3>Advocate Notes</h3>
        </header>
        <div className="table">
          <table cellPadding="0" cellSpacing="0">
            <thead>
              <tr>
                <th id="heading-_select">
                  <div className="custom-checkbox">
                    <div className="custom-checkbox__input">
                      <input
                        id="select-all"
                        type="checkbox"
                        aria-label="Select all rows"
                      />
                      <span className="custom-checkbox__icon check">
                        <svg
                          className="icon icon--check"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 25 25"
                        >
                          <path
                            d="M10.6092 16.0192L17.6477 8.98076"
                            className="stroke"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                          <path
                            d="M7.35229 12.7623L10.6092 16.0192"
                            className="stroke"
                            strokeLinecap="square"
                            strokeLinejoin="bevel"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </th>
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
