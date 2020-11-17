import { React, Component } from 'react';
import SpinnerComponent from '../component/common/spinner/Spinner';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import SomethingWentWrong from '../component/common/notification/Notify-error';
import { getRepoInfo } from '../actions/github-actions';
import HeaderComponent from '../component/common/header/Header';

class GitHeaderContainer extends Component {

    componentDidMount() {
        const { requestRepoInfo } = this.props;
        requestRepoInfo();
    }

    render() {
        const { fetching, repoInfo, error } = this.props;
        return (
            <div>
                {
                    fetching ? <SpinnerComponent /> : error ? <SomethingWentWrong /> :
                        !!repoInfo && Object.keys(repoInfo).length > 0
                        && <HeaderComponent {...repoInfo} />
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        repoInfo: state.repoInfo.repoInfoData,
        fetching: state.repoInfo.fetching,
        error: state.repoInfo.error
    }
}

const mapDispatchToProps = dispatch => ({
    requestRepoInfo: () => dispatch(getRepoInfo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GitHeaderContainer);

GitHeaderContainer.propTypes = {
    requestRepoInfo: PropTypes.func.isRequired,
    fetching: PropTypes.bool.isRequired,
    error: PropTypes.string
};

GitHeaderContainer.defaultProps = {
    error: null,
}
