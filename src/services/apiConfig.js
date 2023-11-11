import {commonrequest} from "./API"

const BASE_URL = "http://localhost:8080/"

export const userReg = async(data)=>{
    return await commonrequest("POST", `${BASE_URL}user/register`, data)
}

export const  userGetfunc = async (search, gender, status)=>{
    return await commonrequest("GET", `${BASE_URL}user/details?search=${search}&gender=${gender}&status=${status}`, "")
}

export const singleUserGet = async (id) =>{
    return await commonrequest("GET", `${BASE_URL}user/${id}`,"")
} 

export const deleteUserProfile = async (id)=>{
    return await commonrequest("DELETE", `${BASE_URL}user/delete/${id}`)
}