import request from '../utilities/request';

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
export const requestBriefAction = () => (dispatch, getState) => 
  request('https://obscure-ravine-37780.herokuapp.com/')
    .then(brief => {
      // Dispatch the action:
      dispatch(updateBriefAction({
        ...brief,
        businessName: brief.business.name,
        businessType: brief.business.type
      }))
    });
export const updateBriefAction = brief => ({
  type: UPDATE_BRIEF,
  payload: {
    brief
  }
});

export default reducer;