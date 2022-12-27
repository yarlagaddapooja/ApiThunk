import { Fetch_products } from '../Actions/ActionType';

const Products=[]
const Reducer = (state=Products,action) => {
    console.log(action)
    console.log(action.type)
    console.log(action.payload)
    switch (action.type) {
        case Fetch_products:
            return{
                ...state,Products:action.payload
            }
            break;
    
        default:
            return state;
            break;
    }
}
export default Reducer