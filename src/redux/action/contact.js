import { actionTypes } from "./actionTypes";

//set action to change filtering value
export const setFilteringVal=(val)=>{
    return {
        type:actionTypes.FILTERING_VALUE,
        payload: val.toLowerCase()
    }
}

//set action to change theme
let isLight = true;
export const setContactTheme=()=>{
    isLight = !isLight

    return {
        type: actionTypes.CONTACT_THEME,
        payload: isLight ? true : false
    }
}

