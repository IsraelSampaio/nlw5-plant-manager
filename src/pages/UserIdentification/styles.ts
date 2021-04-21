import styled from 'styled-components/native'
import { DefaultTheme, StyledComponentBase } from 'styled-components'

interface UserIdentification extends StyledComponentBase<any, DefaultTheme> {
  Title?: any
  Emoji?: any
  Footer?: any
  Form?: any
}

const UserIdentificationStyled: UserIdentification = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: ${props => props.theme.statusBarHeight}px;
  padding: 0 54px;
`

UserIdentificationStyled.Title = styled.Text`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 24px;
  color: ${props => props.theme.colors.heading};

  margin-bottom: 40px;
`

UserIdentificationStyled.Emoji = styled.Image`
  width: 36px;
  height: 36px;
  margin-bottom: 24px;
`
UserIdentificationStyled.Form = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
`

UserIdentificationStyled.Footer = styled.View`
  margin-top: 40px;
  width: 100%;

  padding: 0 20px;
`

export default UserIdentificationStyled
