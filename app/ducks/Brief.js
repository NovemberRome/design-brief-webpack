import request from '../utilities/request';

// Symbols:
const UPDATE_BRIEF = 'UPDATE_BRIEF';

// Reducers:
const initialState = {};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_BRIEF:
      return Object.assign({}, action.payload.brief, action.payload.defaults);
    default:
      return state;
  }
}

// Action Creators:
export const requestBriefAction = defaults => (dispatch, getState) => 
  request('https://obscure-ravine-37780.herokuapp.com/')
    .then(brief => {
      // Dispatch the action:
      dispatch(updateBriefAction({
        ...brief,
        businessName: brief.business.name,
        businessType: brief.business.type
      }, defaults))
    });
export const updateBriefAction = (brief, defaults) => ({
  type: UPDATE_BRIEF,
  payload: {
    brief,
    defaults
  }
});

export default reducer;