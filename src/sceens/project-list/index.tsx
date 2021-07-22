import React from 'react'
import { List } from "./list"
import { SearchPanel } from "./search-panel"
import { useEffect, useState } from "react"
import * as qs from 'qs'
import {clearnObject} from '../../util/index'
import {useMount,useDebounce} from '../../util/hooks'
export const ProjectList = ()=>{
    const [param, setParam] = useState({
        name:'', 
        personId:''
    })
    const [list, setList] = useState([])
    const [users, setUsers] = useState([])
    const apiUrl =  process.env.REACT_APP_API_URL
    const useDebounceParam = useDebounce(param, 200)
    useEffect(()=>{
        fetch( `${apiUrl}/projects?${qs.stringify(clearnObject(useDebounceParam))}`).then(async res=>{
            setList(await res.json())
        })
    },[useDebounceParam, apiUrl])
    useMount(()=>{
        fetch( `${apiUrl}/users`).then(async res=>{
            if(res.ok){
                setUsers(await res.json())
            }
        })
    })
    return <div>
        <SearchPanel users={users} param={param} setParam={setParam}></SearchPanel>
        <List users={users} list={list}></List>
    </div>
}