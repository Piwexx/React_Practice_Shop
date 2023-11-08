/* eslint-disable no-unused-vars */

export const cartInitialState = JSON.parse(window.localStorage.getItem( 'cart')) || []

export const CARD_ACTIONS_TYPES = {
    ADD_TO_CART:'ADD_TO_CART',
    CLEAR_CART: 'CLEAR_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART'
}

export const updateLocalStorage = state =>{
    window.localStorage.setItem('cart',JSON.stringify(state))
}
const UPDATE_STATE_BY_ACTION = {
    [CARD_ACTIONS_TYPES.ADD_TO_CART] :(state,action)=>{
        const {id} = action.payload
        //Check if the product is already in the cart
        const productInCartIndex = state.findIndex(item => item.id === id)

        if(productInCartIndex >= 0){
            const newCart = structuredClone(state)
            newCart[productInCartIndex].quantity +=1
            updateLocalStorage(newCart)
            return newCart
        }
    
        //Producto no esta en el carrito
        const newState =[
            ...state,
            {
            ...action.payload,
            quantity : 1
            }
        ]
        updateLocalStorage(newState)
        return newState
    },

    [CARD_ACTIONS_TYPES.CLEAR_CART] : (state,action)=>{
         updateLocalStorage(cartInitialState)
         return cartInitialState
    },

    [CARD_ACTIONS_TYPES.REMOVE_FROM_CART] : (state,action) =>{
        const {id} = action.payload
        const newState =  state.filter(item =>item.id !== id)
        updateLocalStorage(newState)
        return newState
    }
    
}

export const reducer = (state,action) =>{
    const {type:actionType} = action

    const updateState = UPDATE_STATE_BY_ACTION[actionType]
    return updateState ? updateState(state,action) : state
}
//Con switch 
// export const reducer = (state,action) =>{
//     const {type:actionType , payload:actionPayload}= action

//     switch(actionType){
//       case CARD_ACTIONS_TYPES.ADD_TO_CART:{
//             const {id} = actionPayload
//             //Check if the product is already in the cart
//             const productInCartIndex = state.findIndex(item => item.id === id)

//             if(productInCartIndex >= 0){
//                 const newCart = structuredClone(state)
//                 newCart[productInCartIndex].quantity +=1
//                 updateLocalStorage(newCart)
//                 return newCart
//             }
        
//             //Producto no esta en el carrito
//             const newState =[
//                 ...state,
//                 {
//                 ...actionPayload,
//                 quantity : 1
//                 }
//             ]
//             updateLocalStorage(newState)
//             return newState
//         }

//         case CARD_ACTIONS_TYPES.CLEAR_CART:{
//              updateLocalStorage(cartInitialState)
//              return cartInitialState
//         }

//         case CARD_ACTIONS_TYPES.REMOVE_FROM_CART:{
//             const {id} = actionPayload
//             const newState =  state.filter(item =>item.id !== id)
//             updateLocalStorage(newState)
//             return newState
//         }
        
//       }
//       return state
//     }