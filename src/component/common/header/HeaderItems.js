import { React } from 'react';
import styled from 'styled-components';
import CodeSVG from '../svg/CodeSVG';
import IssueOpenedSVG from '../svg/IssueOpenedSVG';
import ProjectSVG from '../svg/ProjectSVG';
import InsightsSVG from '../svg/InsightsSVG';
import PrSVG from '../svg/PrSVG';
import { PropTypes } from 'prop-types';
import './Header.scss';

const HeaderItemsWrapper = styled.div`
    border: 1px solid transparent;
    border-radius: 3px 3px 0 0;
    border-top: 3px solid transparent;
    color: ${props => (props.selected ? '#24292e' : '#586069')};
    float: left;
    padding: 7px 15px 8px;
    white-space: nowrap;
    background-color : ${props => props.selected && '#fff'};
    border-color : ${props => props.selected && '#e36209 #e1e4e8 transparent'};
    cursor : pointer;
    &:hover {
     color : #000;
    }
  `;

const HeaderItems = ({
    name, value, url, selected
}) => (
        <HeaderItemsWrapper selected={selected}>
            {name === 'Code' && <CodeSVG />}
            {name === 'Issues' && <IssueOpenedSVG />}
            {name === 'Pull Request' && <PrSVG />}
            {name === 'Projects' && <ProjectSVG />}
            {name === 'Insights' && <InsightsSVG />}
            <a className="header-anchor" href={url}>{name}</a>
            {
                value ? <span className="header-item-value">{value}</span> :
                    <span>{value}</span>
            }
        </HeaderItemsWrapper>
    );

export default HeaderItems;

HeaderItems.propTypes = {
    name: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    value: PropTypes.number,
    url: PropTypes.string,
};

HeaderItems.defaultProps = {
    value: undefined,
    url: undefined,
};
