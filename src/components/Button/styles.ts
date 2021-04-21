import styled from 'styled-components/native'
import { DefaultTheme, StyledComponentBase } from 'styled-components'

import { AntDesign } from '@expo/vector-icons'

interface Button extends StyledComponentBase<any, DefaultTheme> {
  Icon?: any
  Text?: any
}

interface ButtonProps {
  onlyIcon: boolean
  disabled: boolean
}

interface ButtonTextProps {
  hasIcon: boolean
}

const ButtonStyled: Button = styled.TouchableOpacity<ButtonProps>`
  background: ${props => props.theme.colors.green};
  padding: 16px;
  border-radius: 16px;
  height: 56px;

  width: ${props => (props.onlyIcon ? '56px' : '100%')};

  opacity: ${props => (props.disabled ? 0.5 : 1)};

  align-items: center;
  justify-content: center;

  flex-direction: row;
`

ButtonStyled.Icon = styled(AntDesign)`
  color: ${props => props.theme.colors.white};
`

ButtonStyled.Text = styled.Text<ButtonTextProps>`
  font-family: ${props => props.theme.fonts.complement};
  font-size: 17px;
  text-align: center;

  margin-left: ${props => (props.hasIcon ? '8px' : '0px')};

  color: ${props => props.theme.colors.white};
`

export default ButtonStyled
