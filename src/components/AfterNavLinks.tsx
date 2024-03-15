import React, { useEffect } from "react";
import { useConfig } from "payload/components/utilities";
import { Button } from "payload/components/elements";

import "./Components.scss";
import { API, CUSTOM, ENVIRONMENT_VARIABLES, V1 } from "../constants/routes";

const baseClass = "after-nav-links";

const AfterNavLinks: React.FC = () => {
  const {
    routes: { admin: adminRoute },
  } = useConfig();

  useEffect(() => {
    const getEnvVars = async () => {
      const envVarsResp = await fetch(
        `/${API}/${CUSTOM}/${V1}/${ENVIRONMENT_VARIABLES}`
      );
      const envVars = await envVarsResp.json();
      Object.entries(envVars).forEach(([key, value]: [string, string]) =>
        localStorage.setItem(key, value)
      );
    };
    getEnvVars();
  }, []);

  return (
    <div className={baseClass}>
      <span className="nav__label" />
      <nav>
        <Button
          className="navButtonMarginOverride"
          el="link"
          buttonStyle="icon-label"
          to={`${adminRoute}/home`}
        >
          Home
        </Button>
        <Button
          className="navButtonMarginOverride"
          el="link"
          buttonStyle="icon-label"
          to={`${adminRoute}/advocate-notes`}
        >
          Advocate Notes
        </Button>
      </nav>
    </div>
  );
};

export default AfterNavLinks;
