import React, { useContext } from 'react'

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

const StackRoutes: React.FC = () => {
  const { colors } = useContext(ThemeContext)

  return (
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
  )
}

export default StackRoutes
