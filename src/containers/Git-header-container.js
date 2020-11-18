import { React, useEffect } from 'react';
import SpinnerComponent from '../component/common/spinner/Spinner';
import { useSelector, useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import SomethingWentWrong from '../component/common/notification/Notify-error';
import { getRepoInfo } from '../actions/github-actions';
import HeaderComponent from '../component/common/header/Header';

const GitHeaderContainer = () => {

    const { fetching, repoInfoData, error } = useSelector(state => state.repoInfo);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRepoInfo());
    }, []);

    return (
        <div>
            {
                fetching ? <SpinnerComponent /> : error ? <SomethingWentWrong /> :
                    !!repoInfoData && Object.keys(repoInfoData).length > 0
                    && <HeaderComponent {...repoInfoData} />
            }
        </div>
    );
}

export default GitHeaderContainer;

GitHeaderContainer.propTypes = {
    fetching: PropTypes.bool,
    error: PropTypes.string
};

GitHeaderContainer.defaultProps = {
    error: null,
}
