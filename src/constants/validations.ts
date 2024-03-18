export const SANITIZE_OPTION_ERROR_MESSAGE = ` is not a valid input. Spaces or symbols other than "-" or "_" are not allowed.`;
export const SANITIZE_PROPERTY_ERROR_MESSAGE = `${SANITIZE_OPTION_ERROR_MESSAGE} First character should be a letter.`;
export const INVALID_PROPERTY_ERROR_MESSAGE = ": property is invalid";
export const INVALID_FIELD_TYPE_ERROR_MESSAGE = ": type is invalid";
export const COULD_NOT_VALIDATE_INPUT_ERROR_MESSAGE =
  "Could not validate input because data is";
export const ATLEAST_ONE_FIELD_ERROR_MESSAGE =
  "Models must have at least one Field.";
export const FAILED_TO_VALIDATE_ERROR_MESSAGE = `Failed to validate: `;

export const FAILED_TO_FETCH_NOTES = `Failed to fetch notes`;
export const FAILED_TO_DELETE_NOTE = `Failed to delete note`;
export const FAILED_TO_CREATE_NOTE = `Failed to create note`;

export const DUPLICATE_SLUG_ERROR_MESSAGE = "duplicate slug found:";
export const DUPLICATE_FIELD_NAME = "duplicate field name";
export const COLLECTION_NAME_IN_USE =
  "is already in use. Please use another collection name.";

export const SLUG_AND_FIELD_NAME_REGEX_VALIDATION = /^[a-zA-Z][_A-Z0-9]*$/i;
export const OPTION_REGEX_VALIDATION = /^[a-zA-Z0-9][_A-Z0-9]*$/i;
export const FIELD_HAS_DEEPLY_NESTED =
  "Field has deeply nested object or array which is not allowed";

export const AVAILABLE_HOOKS = [
  "beforeChange",
  "beforeDelete",
  "beforeLogin",
  "beforeOperation",
  "beforeRead",
  "beforeValidate",
  "afterChange",
  "afterDelete",
  "afterForgotPassword",
  "afterLogin",
  "afterLogout",
  "afterMe",
  "afterRead",
  "afterRefresh",
];

export const MAXIMUM_IMPORT_ENTRIES_PER_REQUEST = 25;

export const minNoteChars = 20;
export const maxNoteChars = 300;

export const typeOptions = [
  { label: "appoinment", value: "appointment" },
  { label: "contract", value: "contract" },
];
