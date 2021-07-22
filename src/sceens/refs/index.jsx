import React,{useEffect} from "react";
import Child from './child'
import globalFn from '../../util/global'
const Refs = ()=>{
    console.log(globalFn())
    const refs =  React.createRef('hah');
    return <Child ref={refs}>clik me</Child>
}

export default Refs