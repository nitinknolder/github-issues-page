import { GET_ISSUES_REQUEST, GET_ISSUES_SUCCESS, GET_ISSUES_FAILURE, FETCH_MORE_ISSUES } from '../actions/github-actions';

const initialState = {
    fetching: false,
    issues: [],
    filterIssues: [],
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
                filterIssues: action.issues.slice(0, 10),
                error: null
            }

        case GET_ISSUES_FAILURE:
            return {
                ...state,
                fetching: false,
                issues: initialState,
                error: action.error
            }
        case FETCH_MORE_ISSUES:
            return {
                ...state,
                fetching: false,
                filterIssues: state.issues.length >= state.filterIssues.length && [
                    ...state.issues.slice(0, state.filterIssues.length + 9)],
                error: null,
            }

        default:
            return state
    }
}