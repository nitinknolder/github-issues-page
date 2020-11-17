import { GET_REPO_INFO_SUCCESS, GET_REPO_INFO_REQUEST, GET_REPO_INFO_FAILURE }
    from '../actions/github-actions';

const initialState = {
    fetching: false,
    repoInfoData: {},
    error: null
};

export function repoInformationData(state = initialState, action) {
    switch (action.type) {
        case GET_REPO_INFO_REQUEST:
            return {
                ...state,
                fetching: true,
                error: null,
            }
        case GET_REPO_INFO_SUCCESS:
            return {
                ...state,
                fetching: false,
                repoInfoData: action.info,
                error: null
            }
        case GET_REPO_INFO_FAILURE:
            return {
                ...state,
                fetching: false,
                repoInfoData: initialState,
                error: action.error
            }
        default:
            return state;

    }
}