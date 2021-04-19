import styled from "styled-components/native";
import { DefaultTheme, StyledComponentBase } from "styled-components";

interface Welcome extends StyledComponentBase<any, DefaultTheme> {
  Image?: any;
  Title?: any;
  Subtitle?: any;
}

const WelcomeStyled: Welcome = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  margin-top: ${props => props.theme.statusBarHeight}px;
  padding: 56px 24px;
`;

WelcomeStyled.Title = styled.Text`
    font-family: 'Jost-SemiBold';
    font-weight: 600;
    font-size: 32px;
    text-align: center;

    color: ${props => props.theme.colors.heading};
`;

WelcomeStyled.Image = styled.Image`
  height: 284px;
  width: 292px;
`;

WelcomeStyled.Subtitle = styled.Text`
    font-family: 'Jost-Regular';
    font-size: 17px;
    text-align: center;

    color: ${props => props.theme.colors.body}
`;

export default WelcomeStyled;
