import 'react-native-gesture-handler';
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './src/app/store'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/components/Login';
import Signup from './src/components/Signup';
import Profile from './src/components/Profile';

const App=()=>{
  const Stack=createStackNavigator()
  return(
     <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name='register' component={Signup}/>
          <Stack.Screen name='login' component={Login}/>
          <Stack.Screen name='profile' component={Profile}/>
          
        </Stack.Navigator>
     </NavigationContainer>
  )
}

export default ()=>{
  return(
    <Provider store={ store }>
      <App/>
    </Provider>
  )
}

