import {
  FETCH_DOWNLOAD_COUNT_REQUEST,
  FETCH_DOWNLOAD_COUNT_SUCCESS,
} from '../actions/softwareActions';

export default function(state = {}, action)  {
  switch (action.type) {
    case FETCH_DOWNLOAD_COUNT_REQUEST:
    case FETCH_DOWNLOAD_COUNT_SUCCESS: {
      return {
        ...state,
        ...{ [action.project.id]: action.project, },
      };
    }
    default: {
      return state;
    }
  }
}