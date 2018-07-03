import { FETCH_CANDIDATES, FETCH_CANDIDATES_SUCCESSFUL, FETCH_CANDIDATES_ERROR } from '../actions/candidate';

const initState = {
    isFetching: false,
    data: null,
};

export default function candidate(state = initState, action) {
    const mappedData = {};

    switch (action.type) {
    case FETCH_CANDIDATES:
        return {
            ...state,
            isFetching: true,
        };
    case FETCH_CANDIDATES_SUCCESSFUL:
        action.data.forEach((element) => {
            mappedData[element.name] = element;
        });
        return {
            ...state,
            isFetching: false,
            data: mappedData,
        };
    case FETCH_CANDIDATES_ERROR:
        return {
            ...state,
            isFetching: false,
            data: {},
        };
    default:
        return state;
    }
}
