import styled from 'styled-components/native'
import {DefaultTheme, StyledComponentBase} from 'styled-components'

import {AntDesign} from '@expo/vector-icons'

interface Button extends StyledComponentBase<any, DefaultTheme>{
    Icon?: any;
    Text?: any;
}

interface ButtonTextProps {
    hasIcon: boolean;
}

const ButtonStyled: Button = styled.TouchableOpacity`
    background: ${props => props.theme.colors.green};
    padding: 16px;
    border-radius: 16px;
    height: 56px;
    width: 56px;
`

ButtonStyled.Icon = styled(AntDesign)`
    color: ${props => props.theme.colors.white}
`

ButtonStyled.Text = styled.Text<ButtonTextProps>`
    font-family: 'Jost-Medium';
    font-size: 17px;
    text-align: center;

    margin-left: ${props => props.hasIcon ? '8px' : '0px'};

    color: ${props => props.theme.colors.white}
`;

export default ButtonStyled