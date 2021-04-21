import React from 'react'

import Confirmation from './styles'

import Button from '../../components/Button'

const ConfirmationPage: React.FC = () => {
  function handleRedirect() {
    console.log('kk eae man')
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
        <Button onPress={handleRedirect} title="Começar" />
      </Confirmation.Footer>
    </Confirmation>
  )
}

export default ConfirmationPage
