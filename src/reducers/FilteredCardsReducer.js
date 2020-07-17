import { SET_FILTERED } from "../constants";

export default (state = [], action) => {
  switch (action.type) {
    case SET_FILTERED:
      const { filteredCards } = action;
      return filteredCards;
    default:
      return state;
  }
};
