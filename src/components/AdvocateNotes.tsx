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

  console.log(`notes: ${JSON.stringify(notes)}`);

  return (
    <DefaultTemplate>
      <div className="modelsContainer">
        <header>
          <h3>Advocate Notes</h3>
        </header>
      </div>
    </DefaultTemplate>
  );
};

export default AdvocateNotes;
