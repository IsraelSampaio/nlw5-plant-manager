import styled from 'styled-components/native'
import { DefaultTheme, StyledComponentBase } from 'styled-components'

interface Confirmation extends StyledComponentBase<any, DefaultTheme> {
  Emoji?: any
  Title?: any
  Subtitle?: any
  Footer?: any
}

const ConfirmationStyled: Confirmation = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: ${props => props.theme.statusBarHeight}px;
  padding: 0 32px;
`

ConfirmationStyled.Emoji = styled.Image`
  width: 96px;
  height: 96px;
  margin-bottom: 64px;
`

ConfirmationStyled.Title = styled.Text`
  font-size: 24px;
  color: ${props => props.theme.colors.heading};
  font-family: ${props => props.theme.fonts.heading};
  margin-bottom: 16px;
`

ConfirmationStyled.Subtitle = styled.Text`
  font-family: ${props => props.theme.fonts.text};
  color: ${props => props.theme.colors.body};
  font-size: 17px;
  line-height: 25px;
  margin-bottom: 40px;
  text-align: center;
`

ConfirmationStyled.Footer = styled.View`
  width: 100%;
  padding: 0 40px;
`

export default ConfirmationStyled
