import React from 'react';

import Button from './styles'

interface ButtonProps {
    icon?: string
    title?: string
    onPress(): void
}

const ButtonComponent: React.FC<ButtonProps> = ({icon, title, onPress}) => {
    const hasIcon = icon != ""

    return (
        <Button onPress={onPress} activeOpacity={0.7}>
            {hasIcon && (
                <Button.Icon name={icon} size={24} />
            )}

            {title && <Button.Text hasIcon={hasIcon}>{title}</Button.Text>}
        </Button>
    )
}

export default ButtonComponent