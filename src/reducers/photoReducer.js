import { CHANGE_PHOTO } from '../actions/photoActions';

const initialState = {
  photos: [],
};

const photoReducer = (state = initialState, action) => {
  switch (action.type){
    case 'FETCH_PHOTOS':
      return {
        photos: [],
      };

    default:
      return state;
  };
};

export default photoReducer;
