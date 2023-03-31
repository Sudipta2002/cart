export const cartReducers = (state,action) => {
    
    switch (action.type) {
        case 'ADD_TO_CART':
            return {...state,cart:[...state.cart,{...action.payload,qty:1}]};
        case 'REMOVE_FROM_CART':
            return {...state,cart:state.cart.filter((c)=>c.id!==action.payload.id)};
        case 'UPDATE_CART':
            return {...state,cart: state.cart.filter((c)=>(c.id===action.payload.id) ? (c.qty=(action.payload.qty)+1) : c.qty)}
        case 'REMOVE_ITEM':
            return {...state,cart: state.cart.filter((c)=>(c.id===action.payload.id) ? (c.qty=(action.payload.qty)-1) : c.qty)}
            // return {...state,cart: state.cart.filter((c)=>(c.id===action.payload.id) ? (console.log(typeof(action.payload.qty))) : c.qty)}
        default:
            return state;
    }
}
