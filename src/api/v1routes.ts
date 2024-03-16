import * as express from "express";

// import {
//   deleteModel,
//   createModel,
//   getModels,
//   getActiveConfigs,
// } from "../storeCollection";
// import { getTagsHandler, searchForItemsWithTagsHandler } from "../tags";
// import { setRestartRequest } from "../../serverStatus";
// import deleteProdEnvTag from "../../util/deleteProdEnvTag";
// import {
//   fetchInitialValuesForSettingsServer,
//   getTagsToRemoveOnEditHandler,
//   saveSettings,
// } from "../../util/settingsUtil";
// import fetchCollectionsServerHandler from "../fetchCollectionsServer";
// import {
//   checkItemAccessHandler,
//   getAccessItemsHandler,
// } from "../utils/authRouteUtil";

// import addTagsHandler from "../tagManagerAdd";
// import removeTagsHandler from "../tagManagerRemove";

// import { TAGS_COLLECTION } from "../../constants/modelNames";
import { NOTES_COLLECTION } from "../constants/routes";
// import { getIslandedDataHandler } from "../utils/islandedData";

const router = express.Router();

// // Private Routes Start
// router.route("/restart").get(async (_, res) => {
//   try {
//     await setRestartRequest();
//     res.sendStatus(200);
//   } catch (err) {
//     console.log(err);
//     res.status(500).send(err);
//   }
// });

// router.route(`/${USER_CAN_ACCESS_ITEM}`).post(checkItemAccessHandler);
// router.route(`/${GET_ACCESS_ITEMS}`).get(getAccessItemsHandler);

const getNotes = () => {
  console.log("I am here");
};

router.route(`/${NOTES_COLLECTION}`).get(getNotes);
// .post(createModel)
// .delete(deleteModel);

// router.route(`/${GET_ACTIVE_CONFIGS}`).get(getActiveConfigs);

// router.route(`/${ENVIRONMENT_VARIABLES}`).get((_, res) => {
//   const { PAYLOAD_PUBLIC_AWS_CLOUDFRONT_URL } = process.env;
//   res.send({ PAYLOAD_PUBLIC_AWS_CLOUDFRONT_URL });
// });

// router
//   .route(`/${GET_TAGS_TO_REMOVE_ON_EDIT}`)
//   .get(getTagsToRemoveOnEditHandler);

// router
//   .route(`/${FETCH_INITIAL_VALUES_FOR_SETTINGS}`)
//   .get(fetchInitialValuesForSettingsServer);

// router.route(`/${ALL_COLLECTIONS}`).get(fetchCollectionsServerHandler);

// router.route(`/${IMPORT_COLLECTION}`).post(importData);

// router.route(`/${DELETE_PROD_ENV_TAG}`).post(deleteProdEnvTag);

// router.route(`/${SETTINGS_ROUTE}`).post(saveSettings);

// router.route(`/${TAG_MANAGER_ADD_TAGS}`).post(addTagsHandler);
// router.route(`/${TAG_MANAGER_REMOVE_TAGS}`).post(removeTagsHandler);

// router.route(`/${ISLANDED_DATA_ROUTE}`).get(getIslandedDataHandler);
// // Private Routes end

// // Public Routes start
// router.route(`/${TAGS_COLLECTION}`).get(getTagsHandler);

// router.route(`/${SEARCH}`).get(searchForItemsWithTagsHandler);

// router.route(`/${SEARCH}/:id`).get(searchForItemWithIdHandler);
// Public Routes end

export default router;
