import express from "express";
import payload from "payload";
import { API, MONGODB_URI, PAYLOAD_SECRET } from "./constants";
import apiRoutes from "./api/routes/v1routes";
import { connectToMongodb } from "./databaseConnection";

const serverStartTime = Date.now();
const defaultPort = 3000;
const requestSizeLimit = "500000kb";
require("dotenv").config();

const initPayload = async (app: express.Express) => {
  // Initialize Payload
  console.log("Initialize Payload Start");
  return payload.init({
    secret: PAYLOAD_SECRET,
    mongoURL: MONGODB_URI,
    express: app,
    onInit: () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });
};
const main = async () => {
  const app = express();
  app.use(express.json({ limit: requestSizeLimit }));
  app.use(express.urlencoded({ extended: true, limit: requestSizeLimit }));
  app.use(`/${API}`, apiRoutes);
  console.log(
    "Admin panel can be found at /admin - automatic redirect has been removed"
  );
  app.listen(defaultPort);

  connectToMongodb();
  await initPayload(app);

  const serverInitialized = Date.now();
  console.log(`Server start time ${serverInitialized - serverStartTime}`);
};

main();
