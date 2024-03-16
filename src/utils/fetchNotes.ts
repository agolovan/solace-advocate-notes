/* eslint-disable no-param-reassign */
// import cloneDeep from "lodash/cloneDeep";
// import payload from "payload";
import { API, NOTES_COLLECTION } from "../constants/routes";
import { INotesSchema } from "../schema/noteCollectionSchema";
// import validateModelData from "../components/validator/validateModelData";

import { FAILED_TO_FETCH_ERROR_MESSAGE } from "../constants/validations";

// export const getUniqueSortedModels = (modelsData): Array<IModelSchema> => {
//   const models = [];

//   // Return empty model data when an error occurs fetching models.
//   if (modelsData === null) return models;

//   modelsData.sort(
//     (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
//   );
//   modelsData.forEach((model) => {
//     const checkName = (obj) => obj.name === model.name;
//     if (!models.some(checkName)) {
//       models.push(model);
//     }
//   });
//   return models;
// };

// Used to display all model versions
// eslint-disable-next-line import/prefer-default-export
export const fetchNotesClient = async () => {
  try {
    const response = await fetch(
      `${window.location.origin}/${API}/${NOTES_COLLECTION}`
    );
    const totalNotes = (await response.json()) as Array<INotesSchema>;
    return totalNotes;
  } catch (err) {
    console.warn(`${FAILED_TO_FETCH_ERROR_MESSAGE} client.`, err.message);
    return null;
  }
};

// Used to display models in editor
// export const fetchModelsClientUnique = async () => {
//   try {
//     const totalUserDefinedModels = await fetchModelsClientAll();

//     const userDefinedModels = getUniqueSortedModels([
//       ...totalUserDefinedModels,
//       cloneDeep(DecisionsCMSModel),
//       cloneDeep(SequencesCMSModel),
//     ]);
//     const errorMessage = executeValidatorClient(userDefinedModels);
//     return { userDefinedModels, errorMessage };
//   } catch (err) {
//     console.warn(`${FAILED_TO_FETCH_ERROR_MESSAGE} client.`, err.message);
//     return null;
//   }
// };

// Use to display collections links to enter data
// export const fetchModelsClient = async () => {
//   try {
//     const { userDefinedModels } = await fetchModelsClientUnique();
//     return userDefinedModels.filter((model) => !model.duplicateSlug);
//   } catch (err) {
//     console.warn(`${FAILED_TO_FETCH_ERROR_MESSAGE} client.`, err.message);
//     return null;
//   }
// };

// Used to create payload api end points
// export const fetchModelsServer = async () => {
//   try {
//     const modelsData =
//       (await ModelCollectionModel.find()) as Array<IModelSchema>;
//     const uniqueSortedModels = getUniqueSortedModels([
//       ...modelsData,
//       cloneDeep(DecisionsCMSModel),
//       cloneDeep(SequencesCMSModel),
//     ]);
//     const validatedModels = executeValidatorServer(uniqueSortedModels);
//     return validatedModels;
//   } catch (err) {
//     console.warn(`${FAILED_TO_FETCH_ERROR_MESSAGE} server.`, err.message);
//     return null;
//   }
// };

// export const getUserDefinedModelNames = async () => {
//   const userDefinedModelsLocal = await fetchModelsServer();
//   const uniqueModelNames = userDefinedModelsLocal.reduce((acc, model) => {
//     const { name } = model;
//     if (!acc.includes(name)) acc.push(name);
//     return acc;
//   }, []);
//   return uniqueModelNames;
// };

// export const getSearchableCollectionVersionNames = async () => {
//   const versionsFromPayload = Object.values(payload.versions)
//     .map((version) => version.modelName.toLowerCase())
//     .filter((item) => !item.includes("_tags_"))
//     .sort();
//   return versionsFromPayload;
// };
