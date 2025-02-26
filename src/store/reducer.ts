import { initialState } from "./state";
import { types } from "./types";

type actionType = {
  [key: string]: string;
};

const reducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case types.CHANGE_LANG:
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};

export { reducer };
