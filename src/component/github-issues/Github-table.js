import React from 'react';
import './Github-page.scss';
import GithubTableHeader from './Github-table-headers';
import GitIssuesContainer from '../../containers/Git-issues-container';

const GithubIssueTable = () => {
    return (
        <div style={{ marginBottom: "20px" }}>
            <GithubTableHeader />
            <GitIssuesContainer />
        </div>
    );
}

export default GithubIssueTable;