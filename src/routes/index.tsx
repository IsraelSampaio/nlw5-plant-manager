import React, { useContext } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import {
  createStackNavigator,
  CardStyleInterpolators
} from '@react-navigation/stack'

import { ThemeContext } from 'styled-components'

// Pages
import WelcomeScreen from '../pages/Welcome'
import UserIdentificationScreen from '../pages/UserIdentification'
import ConfirmationScreen from '../pages/Confirmation'

const Stack = createStackNavigator()

const Routes: React.FC = () => {
  const { colors } = useContext(ThemeContext)

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          cardStyle: {
            backgroundColor: colors.white
          },
          gestureEnabled: false,
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen
          name="UserIdentification"
          component={UserIdentificationScreen}
        />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
