import { actionTypes } from "../action/actionTypes";

const initState={
    theme:{
        brand_1:"#feafa3",
        brand_2:"#ffd5b6",
        brand_3:"#afd5eb",
        brand_4:"#fff1c6",
        brand_5:"#cde9d6",
        brand_6:"#d2e4fd",
        brand_7:"#f8d3cf",
        brand_8:"#c20",
        modern_business: "#292929",
        portfolio_website: "#616161",
        natural_products: "#ffffff",
        organic: "#a7ac38",
        food: "#c4a53e",
        wine: "#bd9c74",
        cafes: "#ecd8e0",
        kids: "#ffd5b6",
        beauty: "#bad8e0",
        sports: "#d8dfee",
        fashion: "#aba8a9",
        warmth: "#f2f2f2",
        fuschia: "#a239ca",
        stark: "#e7dfdd",
        hard: "#000000",
        offline: "#c20",
        online: "green",
    }
}

export const themeReducer=(state=initState, {type, payload})=>{
    switch(type){
        case actionTypes.CHANGE_THEME:
            return {
                ...state,
                theme: payload
            }
        default: 
            return state
    }
}