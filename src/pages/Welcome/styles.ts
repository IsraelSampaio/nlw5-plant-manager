import styled from 'styled-components/native'
import { DefaultTheme, StyledComponentBase } from 'styled-components'

import { Dimensions } from 'react-native'

interface Welcome extends StyledComponentBase<any, DefaultTheme> {
  Image?: any
  Title?: any
  Subtitle?: any
}

const WelcomeStyled: Welcome = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  margin-top: ${props => props.theme.statusBarHeight}px;
`

WelcomeStyled.Title = styled.Text`
  font-family: ${props => props.theme.fonts.heading};
  font-weight: 600;
  font-size: 32px;
  text-align: center;

  color: ${props => props.theme.colors.heading};
`

WelcomeStyled.Image = styled.Image`
  height: ${Dimensions.get('window').width * 0.7}px;
  resize-mode: contain;
`

WelcomeStyled.Subtitle = styled.Text`
  font-family: ${props => props.theme.fonts.text};
  font-size: 17px;
  text-align: center;

  color: ${props => props.theme.colors.body};
`

export default WelcomeStyled
