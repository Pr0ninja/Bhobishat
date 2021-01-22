import React, { createContext, useReducer } from 'react'
import { AuthReducer,ProductReducer } from '../Reducer/GlobalReducer'
import { initialState,quentityState } from '../State/GlobalState'


export const GlobalContext = createContext()

export default function GlobelProvider(props) {
    const [isLogin,setIsLogin]=React.useState(null)
    const [isFirstTime,setIsFirstTime]=React.useState(null)

    const [authState, authDispatch] = useReducer(AuthReducer, initialState)

    const [quentity,quentityDispatch]=useReducer(ProductReducer,quentityState)

    return (
        <GlobalContext.Provider value={{isLogin,setIsLogin,isFirstTime,setIsFirstTime,quentity,quentityDispatch }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
