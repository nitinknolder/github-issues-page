import axios from 'axios';
import { GIT_ISSUE_ENDPOINT, GIT_REPO_INFO } from './constants';

export function getGithubIssues() {
    return axios({
        method: 'get',
        url: GIT_ISSUE_ENDPOINT
    });
}

export function getRepoInfo() {
    return axios({
        method: 'get',
        url: GIT_REPO_INFO
    });
}