import { ADD_TO_CART,REMOVE_TO_CART } from '../Constants'

const initialState = {
    cardDate: []
}
export default function cardItems(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            //console.warn('reducer',action)
            return [
                ...state,
               { cardDate: action.data}
            ]
            case REMOVE_TO_CART:
            //console.warn('reducer',action)
            state.pop();
            return [
                ...state,
            ]
             default:
                return state

    }
}