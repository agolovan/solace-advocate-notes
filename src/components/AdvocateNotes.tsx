/* eslint react/prop-types: 0 */
import React from "react";
import { AdminView } from "payload/config";
import { DefaultTemplate } from "payload/components/templates";

import "./Components.scss";

const AdvocateNotes: AdminView = ({ user }) => (
  <DefaultTemplate>
    <div className="modelsContainer">
      <header>
        <h3>Advocate Notes</h3>
      </header>
    </div>
  </DefaultTemplate>
);

export default AdvocateNotes;
