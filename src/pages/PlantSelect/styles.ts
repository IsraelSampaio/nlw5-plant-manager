import styled from 'styled-components/native'
import { DefaultTheme, StyledComponentBase } from 'styled-components'

interface PlantSelect extends StyledComponentBase<any, DefaultTheme> {
  Header?: any
  Title?: any
  Subtitle?: any
}

const PlantSelectStyled: PlantSelect = styled.SafeAreaView`
  flex: 1;
`

PlantSelectStyled.Header = styled.View`
  padding: 0 24px;
`

PlantSelectStyled.Title = styled.Text`
  font-size: 17px;
  font-family: ${props => props.theme.fonts.complement};
  color: ${props => props.theme.colors.body};
  line-height: 23px;
`

PlantSelectStyled.Subtitle = styled.Text`
  font-size: 17px;
  font-family: ${props => props.theme.fonts.text};
  color: ${props => props.theme.colors.body};
  line-height: 23px;
`

export default PlantSelectStyled
