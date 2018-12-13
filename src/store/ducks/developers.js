/**
 * Types
 */
export const Types = {
  ADD_REQUEST: 'developers/ADD_REQUEST',
  ADD_SUCCESS: 'developers/ADD_SUCCESS',
  ADD_FAILURE: 'developers/ADD_FAILURE',
  REMOVE_REQUEST: 'developers/REMOVE_REQUEST',
  REMOVE_SUCCESS: 'developers/REMOVE_SUCCESS',
  REMOVE_FAILURE: 'developers/REMOVE_FAILURE',
};

/**
 * Reducer
 */
const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
};

export default function developers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true, error: null };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.payload.data],
      };
    case Types.ADD_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    case Types.REMOVE_REQUEST:
      return { ...state, loading: true, error: null };
    case Types.REMOVE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: state.data.filter(todo => todo.id !== action.payload.data.id),
      };
    case Types.REMOVE_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

/**
 * Action
 */
export const Creators = {
  addDeveloperRequest: developerDataInput => ({
    type: Types.ADD_REQUEST,
    payload: { developerDataInput },
  }),

  addDeveloperSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),

  addDeveloperFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),

  removeDeveloperRequest: developer => ({
    type: Types.REMOVE_REQUEST,
    payload: { developer },
  }),

  removeDeveloperSuccess: data => ({
    type: Types.REMOVE_SUCCESS,
    payload: { data },
  }),

  removeDeveloperFailure: error => ({
    type: Types.REMOVE_FAILURE,
    payload: { error },
  }),
};
