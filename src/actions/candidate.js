import 'whatwg-fetch';

import config from '../config';

export const FETCH_CANDIDATES = 'CANDIDATE_FETCH_CANDIDATES';
export const FETCH_CANDIDATES_SUCCESSFUL = 'CANDIDATE_FETCH_CANDIDATES_SUCCESSFUL';
export const FETCH_CANDIDATES_ERROR = 'CANDIDATE_FETCH_CANDIDATES_ERROR';

export function fetchCandidates() {
    return (dispatch) => {
        dispatch({ type: FETCH_CANDIDATES });

        return fetch(`${config.api.base_url}/candidate`)
            .then(response => response.json())
            .then((json) => {
                dispatch({ type: FETCH_CANDIDATES_SUCCESSFUL, data: json.result });
            })
            .catch((error) => {
                dispatch({ type: FETCH_CANDIDATES_ERROR, data: error });
            });
    };
}
