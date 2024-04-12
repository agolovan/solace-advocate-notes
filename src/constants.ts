export const API = "api";
export const NOTES_COLLECTION = "advocatenotes";

export const FAILED_TO_FETCH_NOTES = `Failed to fetch notes`;
export const FAILED_TO_DELETE_NOTE = `Failed to delete note`;
export const FAILED_TO_CREATE_NOTE = `Failed to create note`;

export const MIN_NOTE_CHARS = 20;
export const MAX_NOTE_CHARS = 300;

export const typeOptions = [
  { label: "appoinment", value: "appointment" },
  { label: "contract", value: "contract" },
];

export const MONGODB_URI =
  "mongodb+srv://agolovan:JakeMila1234@cluster0.taibgev.mongodb.net/solace"; // For MongoDB in Atlas
// export const MONGODB_URI = "mongodb://127.0.0.1/solace";  // for local MongoDB
export const PAYLOAD_SECRET = "944ea28fc5e41854c20feb63";

export const EMAIL_REGEX = /^\S+@\S+\.\S+$/;
export const VALIDATION_EMAIL_ADDRESS = "Please enter a valid email address.";
