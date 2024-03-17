import { API, NOTES_COLLECTION } from "../constants/routes";
import { INotesSchema } from "../schema/noteCollectionSchema";

import {
  FAILED_TO_FETCH_NOTES,
  FAILED_TO_DELETE_NOTE,
} from "../constants/validations";

// eslint-disable-next-line import/prefer-default-export
export const fetchNotes = async (email: string) => {
  try {
    const response = await fetch(
      `${
        window.location.origin
      }/${API}/${NOTES_COLLECTION}/?email=${encodeURIComponent(email)}`
    );
    const totalNotes = (await response.json()) as Array<INotesSchema>;
    return totalNotes;
  } catch (err) {
    console.warn(`${FAILED_TO_FETCH_NOTES}`, err.message);
    return null;
  }
};

// eslint-disable-next-line consistent-return
export const deleteNote = async (id: string) => {
  try {
    const datas: RequestInit = {
      method: "DELETE",
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        id,
      }),
    };

    const response = await fetch(
      `${window.location.origin}/${API}/${NOTES_COLLECTION}`,
      datas
    );
    if (response.status !== 200) {
      throw new Error(response.statusText);
    }
  } catch (err) {
    console.warn(`${FAILED_TO_DELETE_NOTE}`, err.message);
    return null;
  }
};
