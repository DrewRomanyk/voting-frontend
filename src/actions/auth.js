

export const FETCH_AUTH = 'AUTH_FETCH_AUTH';
/*
function requestAuth() {
    return {
      type: FETCH_AUTH
    }
  }
  
  export function fetchAuth(pokemon) {
    return function(dispatch, getState){
      dispatch(requestAuth())
      return P.getPokemonByName(pokemon)
      .then((response) => {
        console.log(response)
        dispatch({type: FETCH_POKEMON_SUCCESSFUL, payload: response})
      })
      .catch((error) => {
        dispatch({type: FETCH_POKEMON_ERROR, payload: error})
      })
    }
  }
*/
