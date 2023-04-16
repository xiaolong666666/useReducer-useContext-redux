export const namespace = 'user'

const initialState =  { isLoading: false, info: { name: '未知' }, error: null }

export const FETCH_USER_LOADING = "FETCH_USER_LOADING";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_ERROR = "FETCH_USER_ERROR";

export const FETCHTODO = "FETCHTODO"

export default initialState
