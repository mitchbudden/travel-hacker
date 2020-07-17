import { combineReducers } from "redux";
import user from "./ReducerUser";
import cards from "./ReducerCards";
import filteredCards from "./FilteredCardsReducer";

export default combineReducers({
  user,
  cards,
  filteredCards
});
