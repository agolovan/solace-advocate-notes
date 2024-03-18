import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { AdminView } from "payload/config";
import { useConfig } from "payload/components/utilities";
import { DefaultTemplate } from "payload/components/templates";
import { Button } from "payload/components";
import { fetchNotes } from "../utils/REST";
import { INotesSchema } from "../schema/noteCollectionSchema";
import { displayDateTime } from "../utils/utils";

import "./Components.scss";

const Search: React.FC = () => (
  <svg
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon--search"
  >
    <circle cx="11.2069" cy="10.7069" r="5" className="stroke" />
    <line
      x1="14.914"
      y1="13.9998"
      x2="20.5002"
      y2="19.586"
      className="stroke"
    />
  </svg>
);

// eslint-disable-next-line react/prop-types
const AdvocateNotes: AdminView = ({ user }) => {
  const [notes, setNotes] = useState<Array<INotesSchema>>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  const {
    routes: { admin: adminRoute },
  } = useConfig();

  useEffect(() => {
    const getNotes = async () => {
      // eslint-disable-next-line react/prop-types
      const totalNotes = await fetchNotes(user.email);
      totalNotes?.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setNotes(totalNotes);
    };

    if (typeof user !== "undefined") {
      getNotes();
    }
  }, [user]);

  const filteredNotes = notes?.filter((item) =>
    item.note.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayNotes = filteredNotes?.map((note) => (
    <tr className="row-1" key={note.client + note.title}>
      <td className="cell-client">
        <Button
          className="buttonLink"
          onClick={() => {
            history.push({
              pathname: `${adminRoute}/advocate-notes/note-editor`,
              state: {
                note,
              },
            });
          }}
        >
          {note.title}
        </Button>
      </td>
      <td className="cell-title">
        <span>{note.note}</span>
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
          <h2>My Notes</h2>
          <Button
            className="createButton"
            buttonStyle="secondary"
            onClick={() => {
              history.push({
                pathname: `${adminRoute}/advocate-notes/note-editor`,
              });
            }}
          >
            New Note
          </Button>
        </header>
        <div className="search-filter">
          <input
            className="search-filter__input"
            type="text"
            placeholder="Search by Notes"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search />
        </div>
        <div className="table">
          <table cellPadding="0" cellSpacing="0">
            <thead>
              <tr>
                <th id="heading-client">
                  <div className="sort-column">
                    <span className="sort-column__label">Title</span>
                  </div>
                </th>
                <th id="heading-client">
                  <div className="sort-column">
                    <span className="sort-column__label">Note</span>
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
      </div>
    </DefaultTemplate>
  );
};

export default AdvocateNotes;
