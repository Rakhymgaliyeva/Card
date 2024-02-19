import { useEffect, useState } from "react";

export function useDebounce(value,delay=500){
    const[debounceValue, setDebounceValue]=useState(value)

    useEffect(()=>{
        const time =setTimeout(()=>{
            setDebounceValue(value)
        }, delay)
        
        return()=>{
            clearTimeout(time)
        }

    }, [value,delay])
    return debounceValue
}