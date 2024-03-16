import React, { useEffect } from "react";
import { AdminView } from "payload/config";
import { DefaultTemplate } from "payload/components/templates";

import "./Components.scss";

// eslint-disable-next-line react/prop-types
const AdvocateNotes: AdminView = ({ user }) => {
  console.log(user);

  useEffect(() => {
    const fetchNotes = async () => {
      // const { userDefinedModels, errorMessage } =
      //   await fetchModelsClientUnique();
      // setModels(userDefinedModels);
      // if (errorMessage) {
      //   toast.error(errorMessage);
      // }
    };

    fetchNotes();
  }, []);

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
