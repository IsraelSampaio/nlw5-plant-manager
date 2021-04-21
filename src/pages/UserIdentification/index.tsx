import React, { useState, useMemo } from 'react'
import { Platform } from 'react-native'

import UserIdentification from './styles'

import Button from '../../components/Button'
import Input from '../../components/Input'

import Emoji1 from '../../assets/emoji-1.png'
import Emoji2 from '../../assets/emoji-2.png'

interface UserIdentificationPageProps {
  navigation: {
    navigate(route: string): void
  }
}

const UserIdentificationPage: React.FC<UserIdentificationPageProps> = ({
  navigation
}) => {
  const [username, setUsername] = useState('')

  function handleRedirectConfirmation() {
    navigation.navigate('Confirmation')
  }

  const usernameIsFilled = useMemo(() => username.length > 0, [username])

  const Emoji = useMemo(() => (usernameIsFilled ? Emoji2 : Emoji1), [username])

  return (
    <UserIdentification>
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
    </UserIdentification>
  )
}

export default UserIdentificationPage
