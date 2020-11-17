import { GET_ISSUES_REQUEST, getGitIssuesSuccess, getGitIssuesFailure, GET_REPO_INFO_REQUEST, getRepoInfoSuccess, getRepoInfoFailure } from '../actions/github-actions';
import { getGithubIssues, getRepoInfo } from '../api/calls';
import { takeLatest, put, call, fork } from 'redux-saga/effects';

export function* workerSaga(fn, success, failure) {
    try {
        const response = yield call(fn);
        yield put(success(response.data));
    } catch (error) {
        yield put(failure(error));
    }
}

export function* watcherSaga(action, fn, success, failure) {
    yield takeLatest(action, workerSaga.bind(null, fn, success, failure));
}

export function* fetchGithubIssues() {
    yield call(watcherSaga, GET_ISSUES_REQUEST, getGithubIssues, getGitIssuesSuccess, getGitIssuesFailure);
}

export function* fetchGithubRepoInfo() {
    yield call(watcherSaga, GET_REPO_INFO_REQUEST, getRepoInfo, getRepoInfoSuccess, getRepoInfoFailure);
}

export default function* rootSaga() {
    yield fork(fetchGithubIssues);
    yield fork(fetchGithubRepoInfo);
}