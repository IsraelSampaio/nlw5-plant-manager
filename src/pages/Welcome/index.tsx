import React from 'react'

import Welcome from './styles'

import wateringImg from '../../assets/watering.png'

import Button from '../../components/Button'

interface WelcomePageProps {
  navigation: {
    navigate(route: string): void
  }
}

const WelcomePage: React.FC<WelcomePageProps> = ({ navigation }) => {
  function handleRedirectUserIdentification() {
    navigation.navigate('UserIdentification')
  }

  return (
    <Welcome>
      <Welcome.Title>
        Gerencie {'\n'} suas plantas de {'\n'} forma fácil
      </Welcome.Title>

      <Welcome.Image source={wateringImg} />

      <Welcome.Subtitle>
        Não esqueça mais de regar suas{'\n'} plantas. Nós cuidamos de lembrar
        você{'\n'}
        sempre que precisar.
      </Welcome.Subtitle>

      <Button icon="right" onPress={handleRedirectUserIdentification} />
    </Welcome>
  )
}

export default WelcomePage
