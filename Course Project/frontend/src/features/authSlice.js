import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { url } from './api'
import jwtDecode from 'jwt-decode'

const initialState={
    token:localStorage.getItem('token'),
    name:"",                  //token stored in localstorage and checked if there is some token
    email:"",
    _id:"",
    registerStatus:"",          //track if any error, pending rejected or fulfilled
    registerError:"",
    loginStatus:"",
    loginError:"",
    userLoaded:"false"         //user already loaded or not
}
export const registerUser= createAsyncThunk(
    "auth/registerUser",    //action creator
    async (user,{rejectWithValue})=>{                   //add the error message to the registererror
        try{
           const token = await axios.post(`${url}/register`,{
                name:user.name,
                email:user.email,
                password:user.password
            })          //api endpoint

            localStorage.setItem('token',token.data)    //ey to read from localstorage
            return token.data                          //automatically added yo token
        }catch(err){
            console.log(err.response.data);
            return rejectWithValue(err.response.data)            //performs http request to backend, take back a token and error is handled
        }
                        

    }
)
export const loginUser= createAsyncThunk(
    "auth/loginUser",    //action creator
    async (user,{rejectWithValue})=>{                   
        try{
           const token = await axios.post(`${url}/login`,{
                email:user.email,
                password:user.password
            })          

            localStorage.setItem('token',token.data)    
            return token.data                          
        }catch(err){
            console.log(err.response.data);
            return rejectWithValue(err.response.data)            
        }
                        

    }
)
const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        loadUser(state,action){       //automatically made to be an action
            const token=state.token

            if(token){
                const user=jwtDecode(token)
                return {
                    ...state,
                    token,
                    name:user.name,
                    email:user.email,
                    _id:user._id,
                    userLoaded:true
                }
            }
        },
        logoutUser(state,action){
            localStorage.removeItem("token")
            return {
                ...state,
                token:"",
                name:"",                  
                email:"",
                _id:"",
                registerStatus:"",          
                registerError:"",
                loginStatus:"",
                loginError:"",
                userLoaded:"false"

            }
        }
        
    },
    extraReducers:(builder)=>{
        
        builder.addCase(registerUser.pending, (state,action)=>{
            return {...state,registerStatus:"pending"}
        });
        
        builder.addCase(registerUser.fulfilled, (state,action)=>{    //request for creating user is successful
            if(action.payload){
                const user=jwtDecode(action.payload)
                return {...state, token:action.payload, name:user.name, email:user.email, _id:user._id, registerStatus:"success"}
            }else return state
        });
        
        builder.addCase(registerUser.rejected, (state,action)=>{
            return {
                ...state,
                registerStatus:"rejected",
                registerError:action.payload
            }
        });
        builder.addCase(loginUser.pending, (state,action)=>{
            return {...state,loginStatus:"pending"}
        });
        
        builder.addCase(loginUser.fulfilled, (state,action)=>{    
            if(action.payload){
                const user=jwtDecode(action.payload)
                return {...state, token:action.payload, name:user.name, email:user.email, _id:user._id, loginStatus:"success"}
            }else return state
        });
        
        builder.addCase(loginUser.rejected, (state,action)=>{
            return {
                ...state,
                loginStatus:"rejected",
                loginError:action.payload
            }
        });
    }

    
})
export const {loadUser, logoutUser}= authSlice.actions;
export default authSlice.reducer     //reducer is exoirted from authslice
