import React from 'react'
import { useNavigation } from '@react-navigation/core'

import Confirmation from './styles'

import Button from '../../components/Button'

const ConfirmationPage: React.FC = () => {
  const navigation = useNavigation()

  function handleRedirectPlantSelect() {
    navigation.navigate('PlantSelect')
  }

  return (
    <Confirmation>
      <Confirmation.Emoji source={require('../../assets/emoji-3.png')} />
      <Confirmation.Title>Prontinho</Confirmation.Title>

      <Confirmation.Subtitle>
        Agora vamos começar a cuidar das suas{'\n'} plantinhas com muito
        cuidado.
      </Confirmation.Subtitle>

      <Confirmation.Footer>
        <Button onPress={handleRedirectPlantSelect} title="Começar" />
      </Confirmation.Footer>
    </Confirmation>
  )
}

export default ConfirmationPage
