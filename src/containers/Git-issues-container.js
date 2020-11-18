import { React, useEffect, useState } from 'react';
import styled from 'styled-components';
import SpinnerComponent from '../component/common/spinner/Spinner';
import { getGitIssues, fetchMoreIssue } from '../actions/github-actions';
import { useSelector, useDispatch } from 'react-redux';
import SomethingWentWrong from '../component/common/notification/Notify-error';
import GithubIssues from '../component/github-issues/Github-Issues';
import { PropTypes } from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const IssuesContainerWrapper = styled.div`
   border :  1px solid #e1e4e8;
   border-collapse : collapse;
`;

const GitIssuesContainer = () => {
    const {
        fetching, issues, error, filterIssues
    } = useSelector(state => state.gitIssues);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGitIssues());
    }, []);

    function fetchMoreIssues() {
        setTimeout(() => {
            dispatch(fetchMoreIssue());
        }, 2000);
    }

    return (
        <div>
            {fetching ? (
                <SpinnerComponent />
            ) : (error ?
                <SomethingWentWrong />
                : (
                    <IssuesContainerWrapper>
                        <InfiniteScroll
                            dataLength={filterIssues.length}
                            next={fetchMoreIssues}
                            hasMore={filterIssues.length !== issues.length}
                            loader={<p style={{ textAlign: 'center', color: 'red' }}>
                                <b>Fetching more issues...</b>
                            </p>}
                            endMessage={
                                <p style={{ textAlign: 'center', color: 'green' }}>
                                    <b>Yay! You have seen it all</b>
                                </p>
                            }
                        >
                            {
                                !!filterIssues && filterIssues.map(issue => <GithubIssues key={issue.id} issue={issue} />)
                            }
                        </InfiniteScroll>

                    </IssuesContainerWrapper>
                )
                )}
        </div>
    );
}

GitIssuesContainer.propTypes = {
    fetching: PropTypes.bool,
    error: PropTypes.string,
    issues: PropTypes.arrayOf(
        PropTypes.object.isRequired,
    ),
};

GitIssuesContainer.defaultProps = {
    error: null,
};

export default GitIssuesContainer;