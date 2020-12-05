import * as Actions from './jobs.action'

export const initialState = {
  jobs: [],
  query: {
    keyword: '',
    filters: {},
    sort: {}
  }
};

export default function jobs (state = initialState, action) {
  switch (action.type) {
    case Actions.SET_QUERY_KEYWORD:
      return {
        ...state,
        query: {
          ...state.query,
          keyword: action.data
        }
      }
    case Actions.SET_QUERY_FILTERS:
      return {
        ...state,
        query: {
          ...state.query,
          filters: action.data
        }
      }
    case Actions.SET_QUERY_SORTS:
      return {
        ...state,
        query: {
          ...state.query,
          sort: action.data
        }
      }    
    case Actions.SET_JOBS:
      return {
        ...state,
        jobs: action.jobs
      };
    default:
      return state
  }
}
