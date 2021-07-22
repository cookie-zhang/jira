import { useEffect, useState } from "react";
// 自定义 hooks 封装  注意：自定义hooks的时候一定要use开头，不然eslint就会报错
export const useMount = function (callback:()=>void) {
    useEffect(() => {
      callback();
    }, []);
  };
  
export const useDebounce = (value:unknown, delay?:number)=>{
    const [debouncedValue, setDebouncedValue] = useState(value)
    useEffect(()=>{
        // 每次在value变化以后，设置一个定时器
        const timeout = setTimeout(()=>setDebouncedValue(value),delay)
        // 每次在上一个useEffect处理完以后在运行
        return ()=>clearTimeout(timeout)
    },[value,delay])
    return debouncedValue;
}