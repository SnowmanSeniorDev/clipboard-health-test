import api from '../ApiConfig';

export const SET_JOBS = '[HOME] SET JOBS'
export const SET_QUERY_KEYWORD = '[HOME] SET QUERY KEYWORD'
export const SET_QUERY_FILTERS = '[HOME] SET QUERY FILTERS'
export const SET_QUERY_SORTS = '[HOME] SET QUERY SORTS'

const searchJobs = async (query) => {
    console.log(query)
    return await api.post('/api/jobs', query)
        .then((response) => {    
            return response.data;
        });  
    
}

export const setKeyword = (keyword) => {
    return async (dispatch, getState) => {
        dispatch({
            type : SET_QUERY_KEYWORD,
            data : keyword
        })
        
        dispatch( {
            type: SET_JOBS,
            jobs: await searchJobs(getState().jobs.query) 
        })
    }
}


export const setFilters = (filters) => {

    return async (dispatch, getState) => {
        dispatch({
            type : SET_QUERY_FILTERS,
            data : filters
        })
        
        dispatch( {
            type: SET_JOBS,
            jobs: await searchJobs(getState().jobs.query) 
        })
    }
}


export const setSorts = (sorts) => {
    return async (dispatch, getState) => {
        dispatch({
            type : SET_QUERY_SORTS,
            data : sorts
        })
        
        dispatch( {
            type: SET_JOBS,
            jobs: await searchJobs(getState().jobs.query) 
        })
    }
}
