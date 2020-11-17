import React from 'react';
import RepoLogoSVG from '../svg/RepoLogoSVG';
import { WEB_URL, OWNER, REPO } from '../../../api/constants';
import { PropTypes } from 'prop-types';
import HeaderItems from './HeaderItems';
import HeaderRepoInfo from './Header-repo-info';
import './Header.scss';

const headerValues = [
    {
        name: 'Code', selected: false, url: `${WEB_URL}/${OWNER}/${REPO}`,
    },
    {
        name: 'Issues', value: 253, selected: true, url: `${window.location.origin}`,
    },
    {
        name: 'Pull Requests', value: 72, selected: false, url: `${WEB_URL}/${OWNER}/${REPO}/pulls`,
    },
    {
        name: 'Projects', value: 2, selected: false, url: `${WEB_URL}/${OWNER}/${REPO}/projects`,
    },
    {
        name: 'Insights', selected: false, url: `${WEB_URL}/${OWNER}/${REPO}/insights`,
    },
];

const HeaderComponent = ({
    name,
    html_url,
    owner: { login, url },
}) => (
    <div className="navbar">
        <div className="nav-first-row">
            <div>
                <RepoLogoSVG />
                <a className="repo-link" href={url}>
                    {login}
                </a>
                <span className="divider" style={{margin: "0 .25em"}}>/</span>
                <a className="html-link" href={html_url}>
                    {name}
                </a>
            </div>
            <div className="right-navbar">
                <HeaderRepoInfo tag="Watch" />
                <HeaderRepoInfo tag="Star" />
                <HeaderRepoInfo tag="Fork" />
            </div>
        </div>
        <div className="nav-second-row">
            {
                headerValues.map((values) => (
                    <HeaderItems key={values.name} {...values} />
                ))
            }
        </div>
    </div>
)
export default HeaderComponent;

HeaderComponent.propTypes = {
    name: PropTypes.string.isRequired,
    owner: PropTypes.shape({
        login: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }).isRequired,
}