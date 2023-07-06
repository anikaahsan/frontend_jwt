import React from 'react'
import { useState } from 'react'
import { TextInput,View,Text ,StyleSheet,TouchableOpacity} from 'react-native'
import { useDispatch } from 'react-redux'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'
import { useLoginUserMutation } from '../services/AuthApi'
import { useNavigation } from '@react-navigation/native'
import { login } from '../features/LoginSlice'
import { storeToken } from '../services/AsyncStorageService'


const Login=()=>{
   const [email,setEmail]=useState('')
   const [password,setPassword]=useState('')

   const clearTextInput=()=>{
    setEmail('')
    setPassword('')
   }
   const navigation=useNav

  //dispatch actions using useDispatch
   const dispatch=useDispatch()

  //we can read data from the store with useSelector,
   const login_state=useSelector(state=>state.Login.isLoggedin)

   const [loginUser]=useLoginUserMutation()
   const handleSubmit=async ()=>{
    
    const formdata={email,password}
    const response=await loginUser(formdata)
    if (response.data){
      await storeToken(response.data.token)
      dispatch(login())
      clearTextInput()
      navigation.navigate('profile')
    }

   }







  return(
     <View style={{alignItems:'center',flex:1,justifyContent:'center'}} >
        <View>
            <Text style={{fontSize:40,fontWeight:'bold',}}>Log In</Text>
        </View>
        <View style={{marginTop:20}}>
            <TextInput
                    style={styles.textstyle}
                    value={email}
                    onChangeText={(e)=>setEmail(e)}
                    placeholder='Email'
                    placeholderTextColor={'black'}/>
        
            <TextInput 
                       style={styles.textstyle}
                       value={password}
                       onChangeText={(e)=>setPassword(e)}
                       placeholder='password'
                       placeholderTextColor={'black'}/>
                    
        </View>
        <TouchableOpacity 
                        style={{ width:300,marginTop:15}}
                        onPress={handleSubmit}
                        >
                 <Text style={{fontSize:25,backgroundColor:'slateblue',padding:10,borderRadius:10,textAlign:'center',color:'white'}}>Log In</Text>
        </TouchableOpacity>
        <Text>{email}</Text>
        <Text>{password}</Text>
        <Text>Don't have an account??<TouchableOpacity onPress={navigation.navigate('login')}>Sign Up</TouchableOpacity></Text>
    </View>
  )
}

export default Login;

const styles=StyleSheet.create({
   textstyle:{
       borderWidth:1,
       borderRadius:8,
       width:300,
       fontSize:18,
       margin:8,
       padding:10

   }
})