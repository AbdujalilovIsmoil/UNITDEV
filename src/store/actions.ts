import { types } from "./types";

type payloadTypes = string | string[] | {} | number | number[];

type actionType = {
  type: string;
  payload?: payloadTypes;
};

export const CHANGE_LANGUAGE_ACTION = (value: actionType | string) => {
  return {
    payload: value,
    type: types.CHANGE_LANG,
  };
};
