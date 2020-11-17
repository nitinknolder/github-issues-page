import { combineReducers } from 'redux';
import { gitIssuesData } from './github-issues-reducer';
import { repoInformationData } from './repo-info-reducer';
import { counterReducer } from './counter-reducer';

const rootReducer = combineReducers({
    gitIsssues: gitIssuesData,
    repoInfo: repoInformationData,
    counter: counterReducer
});

export default rootReducer;