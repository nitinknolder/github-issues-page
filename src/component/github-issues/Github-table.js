import React from 'react';
import GitIssuesContainer from '../../containers/Git-issues-container';
import './Github-page.scss';
import GithubTableHeader from './Github-table-headers';

const GithubIssueTable = () => {
    return (
        <div style={{ marginBottom: "20px" }}>
            <GithubTableHeader />
            <GitIssuesContainer />
        </div>
    );
}

export default GithubIssueTable;