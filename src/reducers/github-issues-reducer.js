import { GET_ISSUES_REQUEST, GET_ISSUES_SUCCESS, GET_ISSUES_FAILURE } from '../actions/github-actions';

const initialState = {
    fetching: false,
    issues: [],
    error: null
}

export function gitIssuesData(state = initialState, action) {
    switch (action.type) {
        case GET_ISSUES_REQUEST:
            return {
                ...state,
                fetching: true,
                error: null
            }

        case GET_ISSUES_SUCCESS:
            return {
                ...state,
                fetching: false,
                issues: action.issues,
                error: null
            }

        case GET_ISSUES_FAILURE:
            return {
                ...state,
                fetching: false,
                issues: initialState,
                error: action.error
            }

        default:
            return state
    }
}