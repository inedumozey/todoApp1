import {useState} from 'react'
import {IoClose} from 'react-icons/io5';

export const Dismissible=(props)=>{
    let {children, lifespan=5000, style, dismiss=false, success, successBackgroundColor, failureBackgroundColor, successColor, failureColor, iconStyle} = props;
    

    const handleClose=()=>{
        
    }

    setTimeout(()=>{
        handleClose()
    }, lifespan)

    return (
        <div
            style={{
                display: dismiss ? "none" : 'block',
                position: "absolute",
                padding: "5px 10px",
                fontSize: "12px",
                minHeight: '25px',
                width:'70%',
                marginBottom: "4px",
                ...style,
                backgroundColor: success ? (successBackgroundColor ? successBackgroundColor : "rgb(126, 239, 162, .4)") : (failureBackgroundColor ? failureBackgroundColor : "rgb(240, 135, 135, .4)"),
                color: success ? (successColor ? successColor : " rgb(5, 191, 141)") : (failureColor ? failureColor : "rgb(228, 81, 81)"),
            }}
        >
            {children}
            <IoClose
                onClick={()=>handleClose()}
                style={{
                    position:"absolute",
                    top:"2px",
                    fontSize:'18px',
                    right:"5px",
                    cursor: "pointer",
                    color:"#aaa",
                    ...iconStyle,

                }}
            />
        </div>
    );
}


export const Switch=({ value, thumbColor, tractColor })=>{
    const constant = {
        tractWidth: 29,
        tractHeight: 12,
        thumbWidth: 17,
    }

    return (
        <div
            style={{
                width: constant.tractWidth + 'px',
                backgroundColor: tractColor ? tractColor : '#fff',
                height: constant.tractHeight + 'px',
                borderRadius: '20px',
                zIndex:1000,
                position: 'relative'
            }}
        >
            <div
                style={{
                    height: constant.thumbWidth + 'px',
                    top: '50%',
                    left: value ? constant.tractWidth - constant.thumbWidth  + 'px' : 0,
                    right: value ? 0 : constant.tractWidth - constant.thumbWidth + 'px',
                    position:'absolute',
                    transform: "translateY(-50%)",
                    borderRadius: '50%',
                    backgroundColor: thumbColor ? thumbColor : "rgb(5, 152, 157)",
                    width: constant.thumbWidth + 'px'
                }}
            ></div>
        </div>
    );
}


const isString=(str)=>{
    if(typeof str !== "string" && typeof str !== "number"){
        return false
    }else{
        return true
    }
}
const isArray =(obj)=>{
    if(!(Array.isArray(obj))){
        return false
    }else{
        return true
    }
}
const isFunction =(fn)=>{
    if(typeof fn !=='function'){
       return false
    }else{
        return true
    }
}

export const filter=(data=[], values=[], input="", cb=((res=null, err=null)=>{}))=>{

    if(!isArray(data)){
        return cb( null, "Fisrt parameter must be an array" )
    }
    else if(!isArray(values)){
        return cb( null, "Second parameter must be an array" )
    }
    else if(!isString(input)){
        return cb( null, "Third parameter must be string or number" )
    }
    else if(!isFunction(cb)){
        return cb (null, "Fourth paramter must be a callback" )
    }
    else{            
        //filter the array of object with all the values the user provides in array of the second parameter
        const filteredData = data.filter(data=>{

            //loop through all the values
            let allValues = ""
            for(let i=0; i<values.length; i++){
                
                //use the values in each loop as keys of the data to get the values of the data
                //then asign each to 'allValues defined above'
                //use an empty string to get the values together
                //the string values of allValues will appear as "value1value2value3...""
                if(data[`${values[i]}`]){
                    allValues += (data[`${values[i]}`]).toLowerCase() + ""
                }
            }
            return allValues.includes(input)
        })
        cb(filteredData, null)
   }
}
