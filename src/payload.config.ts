import path from "path";
import { AdminRoute, buildConfig } from "payload/config";

import AdvocateNotes from "./components/AdvocateNotes";
import Users from "./collections/Users";
import AfterNavLinks from "./components/AfterNavLinks";
import SolaceLanding from "./components/SolaceLanding";
import SolaceHomeIcon from "./components/SolaceHomeIcon";

const adminRoute: AdminRoute = {
  Component: SolaceLanding,
  path: "/",
  exact: true,
  sensitive: false,
  strict: false,
};

const advocateNotesRoute: AdminRoute = {
  Component: AdvocateNotes,
  path: "/advocate-notes",
  exact: true,
  sensitive: false,
  strict: false,
};

export default buildConfig({
  admin: {
    css: path.resolve(__dirname, "styles/globalOverride.scss"),
    user: Users.slug,
    webpack: (config) => {
      const newConfig = {
        ...config,
        resolve: {
          ...(config.resolve || {}),
          alias: {
            ...(config.resolve.alias || {}),
            react: path.resolve(__dirname, "../node_modules/react"),
            payload: path.resolve(__dirname, "../node_modules/payload"),
            "react-dom": path.resolve(__dirname, "../node_modules/react-dom"),
            "react-router-dom": path.resolve(
              __dirname,
              "../node_modules/react-router-dom"
            ),
            fs: path.resolve(__dirname, "./mocks/fs.js"),
          },
        },
      };
      return newConfig;
    },
    components: {
      routes: [advocateNotesRoute, adminRoute],
      beforeNavLinks: [SolaceHomeIcon],
      afterNavLinks: [AfterNavLinks],
    },
  },
  collections: [Users],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
});
