import { API, NOTES_COLLECTION } from "../constants/routes";
import { INotesSchema } from "../schema/noteCollectionSchema";

import { FAILED_TO_FETCH_ERROR_MESSAGE } from "../constants/validations";

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
