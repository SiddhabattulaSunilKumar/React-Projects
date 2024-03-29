import { useEffect, useState } from "react";

const getSavedValues=(key,initialValue)=>{
    const savedValue=JSON.parse(localStorage.getItem(key));
    if(savedValue) return savedValue

    if(initialValue instanceof Function) return initialValue();
    return initialValue;
}

const useLocalStorage = (key,initialValue) => {
const[value,setValue]=useState(()=>{
    return getSavedValues(key,initialValue);
});

useEffect(()=>{
localStorage.setItem(key,JSON.stringify(value))
},);

return[value,setValue];
}

export default useLocalStorage;