import { FETCH_AUTH } from '../actions/auth';

const initState = {
    value: true,
};

export default function auth(state = initState, action) {
    // For now, don't handle any actions
    // and just return the state given to us.
    switch (action) {
    case FETCH_AUTH:
        return {
            ...state,
            value: true,
        };
    default:
        return state;
    }
}
