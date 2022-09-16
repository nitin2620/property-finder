import { Action } from "history"
import { createContext, useReducer } from "react"

const INTIAL_STATE={
    city:undefined,
    dates:[],
    option:{
        adult:undefined,
        children:undefined,
        room:undefined
    }
}
export const SearchContext=createContext(INTIAL_STATE)
const SearchReducer=(state,action)=>{
    switch(action.type){
        case "NEW_SEARCH":
return action.payload
case "RESET SEARCH":
    return INTIAL_STATE
    default:
        return state 

        
    }
}

export const SearchContextProvider=({children})=>{
    const [state,dispatch]=useReducer(SearchReducer,INTIAL_STATE);
    return(
        <SearchContext.Provider
        value={{
            city:state.city,
            dates:state.dates,
            options:state.options,
            dispatch,
        }}
        >
            {children  }
        </SearchContext.Provider>
    )
}