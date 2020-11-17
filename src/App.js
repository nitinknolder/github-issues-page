import { React } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GithubIssueTable from './component/github-issues/Github-table';
import GitHeaderContainer from './containers/Git-header-container';
import SubHeaderComponent from './component/common/sub-header/sub-header';

function App() {
  return (
    <div className="git-container">
      <GitHeaderContainer />
      <div className="issue-container">
        <SubHeaderComponent />
        <Router>
          <Switch>
            <Route exact path="/" component={GithubIssueTable} />
            <Route path="*" component={GithubIssueTable} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
