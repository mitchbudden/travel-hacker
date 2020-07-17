import { SIGNED_IN, SET_CARDS, SET_FILTERED } from "../constants";

export function logUser(email) {
  const action = {
    type: SIGNED_IN,
    email
  };
  return action;
}

export function setCards(cards) {
  const action = {
    type: SET_CARDS,
    cards
  };
  return action;
}

export function setFiltered(filteredCards) {
  const action = {
    type: SET_FILTERED,
    filteredCards
  };
  return action;
}
