import React from 'react';
import IssueOpenedSVG from '../common/svg/IssueOpenedSVG';
import Caret from '../common/Caret';
import CompletedSVG from '../common/svg/CompletedSVG';
import styled from 'styled-components';
import { WEB_URL, OWNER, REPO } from '../../api/constants';


const OpenClosedIssueAnchor = styled.a`
    border: 1px solid transparent;
    border-radius: 3px 3px 0 0;
    border-top: 3px solid transparent;
    float: left;
    font-weight : ${props => (props.selected ? 'bold' : 'none')}
    padding: 13px 0px;
    white-space: nowrap;
    cursor : pointer;
    text-decoration : none;
    color : ${props => (props.selected ? '#24292e' : '#586069')};
    &:hover {
     color : #24292e;
    }
    
`;

const otherValues = ['Author', 'Label', 'Projects', 'Milestones', 'Assignee', 'Sort'];

const OtherDetail = ({ value }) => (
    <span className="detail-span">
        {value}
        {' '}
        <Caret />
        {' '}
    </span>
);

const GithubTableHeader = () => (
    <div className="issue-table-header-container">
        <div style={{ padding: "16px" }}>
            <OpenClosedIssueAnchor
                selected
                href={`${WEB_URL}/${OWNER}/${REPO}/issues?q=is%3Aopen+is%3Aissue`}>
                <span className="text-bold">253 Open</span>
            </OpenClosedIssueAnchor>
            <a style={{ marginLeft: '10px' }}
                selected
                href={`${WEB_URL}/${OWNER}/${REPO}/issues?q=is%3Aopen+is%3Aissue`}>
            
            <span className="glyphicon glyphicon-ok header-issues" style={{top: "4px"}}></span><span className="closed-issues-count header-issues">6378 Closed</span>
            </a>
        </div>
        <div className="d-flex flex-row">
            {
                otherValues.map(value => <OtherDetail key={value} value={value} />)
            }
        </div>
    </div>
)

export default GithubTableHeader;
