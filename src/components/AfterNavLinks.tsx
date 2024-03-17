import React from "react";
import { useConfig } from "payload/components/utilities";
import { Button } from "payload/components/elements";

import "./Components.scss";

const baseClass = "after-nav-links";

const AfterNavLinks: React.FC = () => {
  const {
    routes: { admin: adminRoute },
  } = useConfig();

  return (
    <div className={baseClass}>
      <span className="nav__label" />
      <nav>
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
