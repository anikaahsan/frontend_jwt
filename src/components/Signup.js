import React from 'react'
import { useState } from 'react'
import { TextInput,View,Text ,StyleSheet,TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useRegisterUserMutation } from '../services/AuthApi'
import { storeToken } from '../services/AsyncStorageService'

const Signup=()=>{
   const [email,setEmail]=useState('')
   const [username,setUsername]=useState('')
   const [password,setPassword]=useState('')
   const [confirm_password,setConfirm_password]=useState('')

  const clearTextInput = () => {
    setName('');
    setEmail('');
    setPassword('');
    setConfirm_password('');
    
  };
  const navigation=useNavigation()

  const [register]=useRegisterUserMutation()

  const handleSubmit=async ()=>{
     const formData={ email,username,password,confirm_password}
     const response=await register(formData)

     if(response.data){
        await storeToken(response.data.token)
        clearTextInput()
        navigation.navigate('login')
     }

  }



  return(
     <View style={{alignItems:'center',flex:1,justifyContent:'center'}} >
        <View>
            <Text style={{fontSize:40,fontWeight:'bold',}}>Sign Up</Text>
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
                    value={username}
                    onChangeText={(e)=>setUsername(e)}
                    placeholder='Username'
                    placeholderTextColor={'black'}/>
            <TextInput 
                       style={styles.textstyle}
                       value={password}
                       onChangeText={(e)=>setPassword(e)}
                       placeholder='password'
                       placeholderTextColor={'black'}/>
             <TextInput 
                       style={styles.textstyle}
                       value={confirm_password}
                       onChangeText={(e)=>setConfirm_password(e)}
                       placeholder='confirm password'
                       placeholderTextColor={'black'}/>           
        </View>
        <TouchableOpacity 
                        style={{ width:300,marginTop:15}}
                        onPress={handleSubmit}
                        >
                 <Text style={{fontSize:25,backgroundColor:'slateblue',padding:10,borderRadius:10,textAlign:'center',color:'white'}}>Sign Up</Text>
        </TouchableOpacity>
        <Text>Already have an account??<TouchableOpacity onPress={navigation.navigate('login')}>Login</TouchableOpacity></Text>
        <Text>{username}</Text>
        <Text>{password}</Text>
    </View>
  )
}

export default Signup;

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