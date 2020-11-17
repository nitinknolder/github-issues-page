import React from 'react';
import IssueOpenedSVG from '../common/svg/IssueOpenedSVG';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Github-page.scss';
import { getDifference } from '../common/getTimeDifference';
import { WEB_URL, OWNER, REPO } from '../../api/constants';
import Labels from './Github-label';

const GithubIssues = ({
    issue: {
        title, number, created_at, user: { login }, labels,
    },
}) =>  (
    <div className="issue-wrapper">
        <div className="issue-Anchor-title">
            <div className="issue-opened-icon">
                <IssueOpenedSVG color="#28a745" />
            </div>
            <div style={{ width: "75%" }}>
                <Link className="issue-anchor" to={`${number}`} href={`${WEB_URL}/${OWNER}/${REPO}/issues/${number}`}>
                    {' '} {title}
                </Link>
                <Labels labels={labels} />
            </div>
        </div>
        <div className="issue-opened">
            <span>
                #{number} {' '} opened {' '} {getDifference(created_at)} {' '} ago by {' '}
                <Link className="user-anchor" href={`${WEB_URL}/${OWNER}/${REPO}/issues/created_by/${login}`}>
                    {login}
                </Link>
            </span>
        </div>
    </div>
    );

export default GithubIssues;

GithubIssues.propTypes = {
    issue:
        PropTypes.shape(
            {
                title: PropTypes.string.isRequired,
                number: PropTypes.number.isRequired,
                user:
                    PropTypes.shape({
                        login: PropTypes.string.isRequired,
                    }).isRequired,
                created_at: PropTypes.string.isRequired,
                labels: PropTypes.array.isRequired,
            },
        ).isRequired,
};
