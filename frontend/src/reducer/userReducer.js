import { ALL_USERS_FAIL, ALL_USERS_REQUEST, ALL_USERS_SUCCESS, CLEAR_ERROR } from "../constant/userConstant";


export const allUsersReducer = (state={users:[]},action)=>{
    switch(action.type){
        case ALL_USERS_REQUEST:
            return{
                ...state,
                loading:true
            }
        case ALL_USERS_SUCCESS:
            return{
                ...state,
                loading:false,
                users:action.payload
            }
        case ALL_USERS_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        case CLEAR_ERROR:
            return{
                ...state,
                error:null
            }
        default:
            return state
    }
}