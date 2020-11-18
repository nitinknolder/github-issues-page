export const GET_ISSUES_REQUEST = 'GET_ISSUE_REQUEST';
export const GET_ISSUES_SUCCESS = 'GET_ISSUES_SUCCESS';
export const GET_ISSUES_FAILURE = 'GET_ISSUES_FAILURE';
export const GET_REPO_INFO_REQUEST = 'GET_REPO_INFO_REQUEST';
export const GET_REPO_INFO_SUCCESS = 'GET_REPO_INFO_SUCCESS';
export const GET_REPO_INFO_FAILURE = 'GET_REPO_INFO_FAILURE';
export const INCREMENT_COUNT_WATCH = 'INCREMENT_COUNT_WATCH';
export const INCREMENT_COUNT_STAR = 'INCREMENT_COUNT_STAR';
export const INCREMENT_COUNT_FORK = 'INCREMENT_COUNT_FORK';
export const FETCH_MORE_ISSUES = 'FETCH_MORE_ISSUES';

export function getGitIssues() {
    return {
        type: GET_ISSUES_REQUEST,
    };
}

export function getGitIssuesSuccess(issues) {
    return {
        type: GET_ISSUES_SUCCESS,
        issues
    }
}

export function getGitIssuesFailure(error) {
    return {
        type: GET_ISSUES_FAILURE,
        error
    }
}

export function getRepoInfo() {
    return {
        type: GET_REPO_INFO_REQUEST
    }
}

export function getRepoInfoSuccess(info) {
    return {
        type: GET_REPO_INFO_SUCCESS,
        info
    }
}

export function getRepoInfoFailure(error) {
    return {
        type: GET_REPO_INFO_FAILURE,
        error
    }
}

export function incrementRepoWatchCount() {
    return {
        type: INCREMENT_COUNT_WATCH,
    }
}

export function incrementRepoStarCount() {
    return {
        type: INCREMENT_COUNT_STAR,
    }
}

export function incrementRepoForkCount() {
    return {
        type: INCREMENT_COUNT_FORK,
    }
}

export function fetchMoreIssue() {
    return {
        type: FETCH_MORE_ISSUES,
    }
}