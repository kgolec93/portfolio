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
        case 'SHOW_SIDE_MENU':
            return (
                {...state, showSideMenu: true}
            )
        case 'CLOSE_SIDE_MENU':
                return (
                    {...state, showSideMenu: false}
                )    
        
        default:
            return state
    }
}

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store