import AsyncStorage from '@react-native-async-storage/async-storage';

const storeToken=async (value)=>{
    try{
        //storing object value
        const token=JSON.stringify(value)
        await AsyncStorage.setItem('token',token)
    }catch (error){
       console.log(error)
    }
}

const getToken=async ()=>{
    try{
        const token=await AsyncStorage.getItem('token')
        if(token!==null){
            return token
        }
    }catch(error){
        console.log(error)
    }
}

const removeToken=async ()=>{
    try{
        await AsyncStorage.removeItem('token')
    }catch (error){
        console.log(error)
    }
}
export {storeToken,getToken,removeToken}