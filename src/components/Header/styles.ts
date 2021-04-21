import styled from 'styled-components/native'
import { DefaultTheme, StyledComponentBase } from 'styled-components'

interface Header extends StyledComponentBase<any, DefaultTheme> {
  Greeting?: any
  Username?: any
  Image?: any
}

const HeaderStyled: Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 24px;
  margin-top: ${props => props.theme.statusBarHeight}px;
`

HeaderStyled.Greeting = styled.Text`
  font-size: 32px;
  color: ${props => props.theme.colors.heading};
  font-family: ${props => props.theme.fonts.text};
`

HeaderStyled.Username = styled.Text`
  font-size: 32px;
  color: ${props => props.theme.colors.heading};
  font-family: ${props => props.theme.fonts.heading};
  line-height: 40px;
`

HeaderStyled.Image = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 56px;
`

export default HeaderStyled
