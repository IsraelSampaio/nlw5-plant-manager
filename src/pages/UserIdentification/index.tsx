import React, { useState, useMemo } from 'react'
import { useNavigation } from '@react-navigation/core'
import { Platform, TouchableWithoutFeedback, Keyboard } from 'react-native'

import UserIdentification from './styles'

import Button from '../../components/Button'
import Input from '../../components/Input'

import Emoji1 from '../../assets/emoji-1.png'
import Emoji2 from '../../assets/emoji-2.png'

const UserIdentificationPage: React.FC = () => {
  const [username, setUsername] = useState('')
  const navigation = useNavigation()

  function handleRedirectConfirmation() {
    navigation.navigate('Confirmation')
  }

  const usernameIsFilled = useMemo(() => username.length > 0, [username])

  const Emoji = useMemo(() => (usernameIsFilled ? Emoji2 : Emoji1), [username])

  return (
    <UserIdentification>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <UserIdentification.Form
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <UserIdentification.Emoji source={Emoji} />
          <UserIdentification.Title>
            Como podemos{'\n'} chamar você?
          </UserIdentification.Title>

          <Input onChangeText={setUsername} placeholder="Digite um nome" />

          <UserIdentification.Footer>
            <Button
              onPress={handleRedirectConfirmation}
              title="Confirmar"
              disabled={!usernameIsFilled}
            />
          </UserIdentification.Footer>
        </UserIdentification.Form>
      </TouchableWithoutFeedback>
    </UserIdentification>
  )
}

export default UserIdentificationPage
