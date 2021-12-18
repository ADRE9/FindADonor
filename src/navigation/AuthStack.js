import React,{useState,useEffect} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import OnboardingScreen from '../screens/OnboardingScreen';
import LandingScreen from '../screens/LandingScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import RegisterScreen2 from '../screens/RegisterScreen2';


const Stack = createNativeStackNavigator();

export default function AuthStack() {
  const [firstLaunch, setFirstLaunch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value === null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setFirstLaunch(true);
      } else {
        setFirstLaunch(false);
      }
    }).catch(error=>console.log(error))
  }, [firstLaunch]);

  if (firstLaunch === null) {
    return null;
  } else if (firstLaunch === true) {
    routeName = "Onboarding";
  } else {
    routeName = "Landing";
  }

  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen options={{header:()=>null}} name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen options={{ header: () => null }} name="Landing" component={LandingScreen} />
      <Stack.Screen options={{header:()=>null}} name="Login" component={LoginScreen}/>
      <Stack.Screen options={{ header: () => null }} name="Register" component={RegisterScreen} />
      <Stack.Screen options={{header:()=>null}} name="Register2" component={RegisterScreen2}/>
    </Stack.Navigator>
  )
};
