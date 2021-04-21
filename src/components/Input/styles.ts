import styled from 'styled-components/native'
import { DefaultTheme, StyledComponentBase } from 'styled-components'

type Input = StyledComponentBase<any, DefaultTheme>

const InputStyled: Input = styled.TextInput`
  border-bottom-width: 1px;
  border-color: ${props => props.theme.colors.gray};
  color: ${props => props.theme.colors.heading};
  width: 100%;
  font-size: 18px;
  padding: 10px;
  text-align: center;
`

export default InputStyled
