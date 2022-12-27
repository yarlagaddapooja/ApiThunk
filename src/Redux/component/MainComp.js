//import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchingMyRealData } from '../Actions/ActionCreator'

const MainComp = () => {
    const dispatch =useDispatch()
    const myData= useSelector(myData=>console.log(myData?.Products))
    // useEffect(() => {
    //         const FakeData=axios.get(`https://jsonplaceholder.typicode.com/users`)
    //         .then(data=>dispatch(FetchingMyRealData(data?.data)))  
    // }, [])
    
//redux-thunk
useEffect(() => {
    dispatch(FetchingMyRealData())
}, [])
  return (
    <div>MainComp</div>
  )
}

export default MainComp