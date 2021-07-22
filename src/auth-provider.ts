import { User }from './sceens/project-list/search-panel'
const localStrorageKey = '__auth__provider_token__ '
export const getToken = () => window.localStorage.getItem(localStrorageKey)
export const handleUserResponse = ({ user }:{user:User}) => {
  window.localStorage.setItem(localStrorageKey, user.token || '')
  return user
}
const apiUrl =  process.env.REACT_APP_API_URL
export const login = (data:{username: string, password: string}) => {
  return fetch(`${apiUrl}/login`,{
    method: 'POST',
    headers:{
        'Content-Type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify(data)
}).then(async res=>{
  if (res.ok) {
    return handleUserResponse(await res.json())
  } else {
    return Promise.reject()
  }
})
}

export const register = (data:{username: string, password: string}) => {
  return fetch(`${apiUrl}/register`,{
    method: 'POST',
    headers:{
        'Content-Type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify(data)
}).then(async res=>{
    if (res.ok) {
      return handleUserResponse(await res.json())
    }else {
      return Promise.reject()
    }
})
}

export const loginout = async ()=>window.localStorage.removeItem(localStrorageKey)