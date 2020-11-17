import { React } from 'react';
import Caret from '../Caret';
import SearchSVG from '../svg/SearchSVG';
import { WEB_URL, OWNER, REPO } from '../../../api/constants';
import DetailComponent from '../detail-component/detail-component';
import './sub-header.scss';

const SubHeaderComponent = () => (
    <div className="sub-header-container">
        <div className="search-bar">
            <div>
                <div className="filter-container">
                    Filter <Caret />
                </div>
                <div className="search-container">
                    <SearchSVG />
                    <input type="text" defaultValue="is:issue is:open" className="input-search" />

                </div>
            </div>
            <DetailComponent
                tag="Labels"
                value="Milestones"
                tagBackgroundColor="#ffffff"
                valueBackgroundColor="#ffffff"
                tagPadding="9px 14px"
                valuePadding="9px 14px"
                tagHref={`${WEB_URL}/${OWNER}/${REPO}/labels`}
                valueHref={`${WEB_URL}/${OWNER}/${REPO}/milestones`}
            />
        </div>
        <a className="new-issue" href={`${WEB_URL}/${OWNER}/${REPO}/issues/new`}>New Issue</a>
    </div>
)
export default SubHeaderComponent;