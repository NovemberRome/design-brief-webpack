// Symbols:
const UPDATE_BRIEF = 'UPDATE_BRIEF';

// Reducers:
const initialState = {};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_BRIEF:
      return action.payload.brief;
    default:
      return state;
  }
}

// Action Creators:
export const updateBriefAction = brief => ({
  type: UPDATE_BRIEF,
  payload: {
    brief
  }
});

export default reducer;