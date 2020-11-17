import { React, Component } from 'react';
import styled from 'styled-components';
import SpinnerComponent from '../component/common/spinner/Spinner';
import { getGitIssues } from '../actions/github-actions';
import { connect } from 'react-redux';
import SomethingWentWrong from '../component/common/notification/Notify-error';
import GithubIssues from '../component/github-issues/Github-Issues';
import { PropTypes } from 'prop-types';

const IssuesContainerWrapper = styled.div`
   border :  1px solid #e1e4e8;
   border-collapse : collapse;
`;
class GitIssuesContainer extends Component {
    componentDidMount() {
        const { requestIssues } = this.props;
        requestIssues();
    }

    render() {
        const {
            fetching, issues, error,
        } = this.props;

        return (
            <div>
                {fetching ? (
                    <SpinnerComponent />
                ) : (error ?
                    <SomethingWentWrong />
                    : (
                        <IssuesContainerWrapper>
                            {
                                !!issues && issues.map(issue => <GithubIssues key={issue.id} issue={issue} />)
                            }
                        </IssuesContainerWrapper>
                    )
                    )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        issues: state.gitIsssues.issues,
        fetching: state.gitIsssues.fetching,
        error: state.gitIsssues.error
    }
};

const mapDispatchToProps = dispatch => ({
    requestIssues: () => dispatch(getGitIssues()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GitIssuesContainer);

GitIssuesContainer.propTypes = {
    requestIssues: PropTypes.func.isRequired,
    fetching: PropTypes.bool,
    error: PropTypes.string,
    issues: PropTypes.arrayOf(
        PropTypes.object.isRequired,
    ),
};

GitIssuesContainer.defaultProps = {
    error: null,
};