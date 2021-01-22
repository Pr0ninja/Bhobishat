export const AuthReducer = (state, action) => {
    switch (action.type) {
        case "Login":
                return { ...state, isLogin:action.value}
        case "Logout":
            return alert('Logout')
        case "FisrtLaunch":
            return {...state,isFirstLaunch:action.value}
        default:
            return console.log('Null')
    }

}


export const ProductReducer = (state,action)=>{
    switch(action.type){
        case "Add":
            return {...state,quantity:state.quantity+1}
        case "Sub":
            return {...state,quantity:state.quantity-1}
        default:
            console.log('error')
    }
}
