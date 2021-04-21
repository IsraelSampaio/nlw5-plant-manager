import React from 'react'
import { View, TouchableOpacityProps } from 'react-native'

import Button from './styles'

interface ButtonProps extends TouchableOpacityProps {
  icon?: string
  title?: string
  disabled?: boolean
}

const ButtonComponent: React.FC<ButtonProps> = ({
  icon,
  title,
  disabled,
  ...restProps
}) => {
  return (
    <View pointerEvents={disabled ? 'none' : 'auto'}>
      <Button
        activeOpacity={0.7}
        onlyIcon={!title && Boolean(icon)}
        disabled={disabled}
        {...restProps}
      >
        {Boolean(icon) && <Button.Icon name={icon} size={24} />}

        {title && <Button.Text hasIcon={Boolean(icon)}>{title}</Button.Text>}
      </Button>
    </View>
  )
}

export default ButtonComponent
