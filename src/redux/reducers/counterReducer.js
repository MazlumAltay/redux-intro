import * as actionsTypes from "../actions/actionTypes";

const counterReducer = (state = 0, action) => {
  let newstate;
  switch (action.type) {
    case actionsTypes.INCREASE_COUNTER:
      return (newstate = state + action.payload);
    case actionsTypes.DECREASE_COUNTER:
      return (newstate = state - action.payload);
    case actionsTypes.INCREASE_BY_TWO_COUNTER:
      return (newstate = state + action.payload);
    default:
      return state;
  }
};
