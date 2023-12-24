import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import OTPScreen from '../screens/OTPScreen';

const Stack = createNativeStackNavigator();

function NavigationScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerShadowVisible: false,
        }}>
        <Stack.Screen
          options={{title: 'Log In'}}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{title: 'OTP Verify'}}
          name="OTP"
          component={OTPScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationScreen;
