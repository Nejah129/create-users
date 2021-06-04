import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import {getProfil} from '../redux/actions/actions'

const Profile = () => {
    const {loading,users,isAuth,token} = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(getProfil())
    }, [])
    return (
        
        <div>
          {loading
          ?
        <h1>Loading...</h1>:
        !isAuth ? <Redirect to='/login'/>:
        <div>
            <h1>{users.name}</h1>
        </div>
         } 
        </div>
    )
}

export default Profile
