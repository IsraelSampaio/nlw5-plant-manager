import styled from 'styled-components/native'
import { DefaultTheme, StyledComponentBase } from 'styled-components'

import { RectButton } from 'react-native-gesture-handler'

interface EnvironmentButton extends StyledComponentBase<any, DefaultTheme> {
  Title?: any
}

interface EnvironmentButtonProps {
  active: boolean
}

const EnvironmentButtonStyled: EnvironmentButton = styled(
  RectButton
)<EnvironmentButtonProps>`
  background: ${props =>
    props.theme.colors[props.active ? 'green_light' : 'shape']};
  height: 40px;
  width: 76px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`

EnvironmentButtonStyled.Title = styled.Text<EnvironmentButtonProps>`
  font-size: 13px;
  font-family: ${props =>
    props.theme.fonts[props.active ? 'heading' : 'complement']};
  color: ${props =>
    props.theme.colors[props.active ? 'green_dark' : 'heading']};
`

export default EnvironmentButtonStyled
