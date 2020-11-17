import { INCREMENT_COUNT_WATCH, INCREMENT_COUNT_FORK, INCREMENT_COUNT_STAR } from '../actions/github-actions';

const initialState = {
    watch_count: 0,
    star_count: 0,
    fork_count: 0,
}

export function counterReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT_COUNT_WATCH:
            return {
                ...state,
                watch_count: state.watch_count + 1,
            }
        case INCREMENT_COUNT_STAR:
            return {
                ...state,
                star_count: state.star_count + 1,
            }
        case INCREMENT_COUNT_FORK:
            return {
                ...state,
                fork_count: state.fork_count + 1,
            }
        default:
            return state;
    }
}