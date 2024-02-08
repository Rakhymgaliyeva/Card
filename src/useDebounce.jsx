import { useEffect, useState } from "react";

export function useDebounce(value,delay){
    const[debounceValue, setDebounceValue]=useState(value)

    useEffect(()=>{
        const time =setTimeout(()=>{
            setDebounceValue(value)
        }, delay ?? 500)
        
        return()=>{
            clearTimeout(time)
        }

    }, [value,delay])
    return debounceValue
}