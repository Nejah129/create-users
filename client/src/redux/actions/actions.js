import { GET_PROFIL_FAIL, GET_PROFIL_SUCCESS, LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, PROFIL, REGISTER, REGISTER_REFUSE, REGISTER_SUCCESS } from "../actionsType/actionstype"
import axios from "axios"



export const register =(newUser)=>async(dispatch)=>{
    dispatch({
        type:REGISTER
    })

    try {
      const registerRes = await axios.post('/user/register',newUser)
      console.log(registerRes.data)
      dispatch({
          type:REGISTER_SUCCESS,
          payload:registerRes.data
      })
    } catch (error) {
        dispatch({
            type:REGISTER_REFUSE,
            payload:error.response.data
        }
            
        )
    }
}
export const login =(user)=>async(dispatch)=>{
    dispatch({
        type:LOGIN
    })
    try {
       const loginRes =await axios.post('user/login',user)
       localStorage.setItem('token',loginRes.data.token)
       dispatch({
           type:LOGIN_SUCCESS,
           payload:loginRes.data
       })
        
    } catch (error) {
        dispatch({
            type:LOGIN_FAIL,
            payload:error.response.data
        })
        
    }
}
export const  getProfil =()=>async(dispatch)=>{
    dispatch({
        type:PROFIL
    })
    const token=localStorage.getItem('token')
    const config={
        headers:{
            Authorization:token
        }
    }
    try {
        const isAuth=await axios.get('user/auth',config)
        dispatch({
            type:GET_PROFIL_SUCCESS,
            payload:isAuth.data
        })
    } catch (error) {
        dispatch({
            type:GET_PROFIL_FAIL,
            payload:error.response.data
        })
    }
}