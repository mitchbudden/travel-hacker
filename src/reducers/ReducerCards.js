import { SET_CARDS } from "../constants";

export default (state = [], action) => {
  switch (action.type) {
    case SET_CARDS:
      const { cards } = action;
      return cards;
    default:
      return state;
  }
};
