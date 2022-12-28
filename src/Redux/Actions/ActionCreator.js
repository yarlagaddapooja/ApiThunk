import axios from "axios"
import fakestoreApi from "../fakestoreApi"
import { Fetch_products } from "./ActionType"
//here i am making changes

export const FetchingMyRealData=()=>{
    // return{
    //     type:Fetch_products,
    //     payload:realdata
    // }

    // const MyThunkData=await fakestoreApi.get('/users')
    //     return{
    //     type:Fetch_products,
    //     payload:MyThunkData
    // }

    // redux-thunk -api
    return async (dispatch)=>{
    const MyThunkData=await fakestoreApi.get('/users')
        dispatch({
        type:Fetch_products,
        payload:MyThunkData?.data
        })
    }
}
