import { React } from 'react';
import { useDispatch, useSelector } from "react-redux";
import './Header.scss';
import Caret from '../Caret';
import { incrementRepoStarCount, incrementRepoWatchCount, incrementRepoForkCount } from '../../../actions/github-actions';
import WatchSVG from '../svg/WatchSVG';
import StarSVG from '../svg/StarSVG';
import ForkSVG from '../svg/ForkSVG';

const HeaderRepoInfo = ({ tag }) => {

    const watch_count = useSelector(state => state.counter.watch_count);
    const star_count = useSelector(state => state.counter.star_count);
    const fork_count = useSelector(state => state.counter.fork_count);
    const dispatch = useDispatch();

    return (
        <div className="header-repo-container">
            <span className="header-repo-tag-container">
                {tag === 'Watch' && <WatchSVG />}
                {tag === 'Star' && <StarSVG />}
                {tag === 'Fork' && <ForkSVG />}
                {tag}
                <Caret />
                {tag === 'Watch' ?
                    <span className="header-info-container"
                        onClick={() => dispatch(incrementRepoWatchCount())}>
                        {watch_count}</span>
                    : (tag === 'Star' ?
                        <span className="header-info-container"
                            onClick={() => dispatch(incrementRepoStarCount())}>
                            {star_count}</span>
                        : (tag === 'Fork' ?
                            <span className="header-info-container"
                                onClick={() => dispatch(incrementRepoForkCount())}>
                                {fork_count}</span>
                            : null
                        )
                    )
                }
            </span>
        </div>
    );
}

export default HeaderRepoInfo;