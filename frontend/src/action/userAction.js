import { all_users } from "../api/userApi"
import { ALL_USERS_FAIL, ALL_USERS_REQUEST, ALL_USERS_SUCCESS } from "../constant/userConstant"
import axios from "axios"


export const allUsers = ()=> async(dispatch)=>{
    try {
        dispatch({type:ALL_USERS_REQUEST})
        const {data} = await axios.get(all_users)
        // console.log(data)
        dispatch({
            type:ALL_USERS_SUCCESS,
            payload:data.users
        })
    } catch (error) {
        dispatch({
            type:ALL_USERS_FAIL,
            payload:error.response.data.message
        })
    }
}