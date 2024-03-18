import {
  API,
  NOTES_COLLECTION,
  FAILED_TO_FETCH_NOTES,
  FAILED_TO_DELETE_NOTE,
  FAILED_TO_CREATE_NOTE,
} from "../constants";
import { INotesSchema } from "../schema/noteCollectionSchema";

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
    console.error(`${FAILED_TO_FETCH_NOTES}`, err.message);
  }
};

// eslint-disable-next-line consistent-return
export const createAndUpdateNote = async (note: INotesSchema) => {
  try {
    const datas: RequestInit = {
      method: "POST",
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(note),
    };

    const response = await fetch(
      `${window.location.origin}/${API}/${NOTES_COLLECTION}`,
      datas
    );
    if (response.status !== 200) {
      console.error(`${FAILED_TO_CREATE_NOTE}`);
    }
  } catch (err) {
    console.error(`${FAILED_TO_CREATE_NOTE}`, err.message);
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
      console.error(FAILED_TO_DELETE_NOTE);
    }
  } catch (err) {
    console.warn(`${FAILED_TO_DELETE_NOTE}`, err.message);
  }
};
