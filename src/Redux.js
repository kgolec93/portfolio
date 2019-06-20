import { createStore } from 'redux'

const initialState = {
    name: 'Kamil Golec'
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'LOAD_DATA':
            return (
                {...state, data: action.payload}
            );
        
        default:
            return state
    }
}

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store