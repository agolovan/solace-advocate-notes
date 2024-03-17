/* eslint react/prop-types: 0 */
import React from "react";
import { AdminView } from "payload/config";
import { MinimalTemplate } from "payload/components/templates";

import "./Components.scss";

const SolaceLanding: AdminView = () => (
  <MinimalTemplate>
    <div className="solaceLandingContainer">
      <a className="solaceLanding" href="https://www.solace.health/">
        <img
          className="solaceLandingImage"
          src="https://app.ashbyhq.com/api/images/org-theme-wordmark/a6641cc1-44a7-482d-ac23-ad45e9bf44dd/6f7436ea-bdf7-4b7e-9936-59a0e5944c49.png"
          alt="Solace Health"
        />
      </a>
      <br />
      <div className="landingPageText">
        <h3>This is Colace Landing Page</h3>
      </div>
    </div>
  </MinimalTemplate>
);

export default SolaceLanding;
