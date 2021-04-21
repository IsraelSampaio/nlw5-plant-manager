import React from 'react'
import { View } from 'react-native'

import Header from './styles'

const HeaderComponent: React.FC = () => {
  return (
    <Header>
      <View>
        <Header.Greeting>Olá, </Header.Greeting>
        <Header.Username>Israel Sampaio</Header.Username>
      </View>

      <Header.Image source={require('../../assets/perfil.jpeg')} />
    </Header>
  )
}

export default HeaderComponent
