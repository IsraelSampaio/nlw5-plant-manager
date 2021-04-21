import React from 'react'
import { View } from 'react-native'

import Button from './styles'

interface ButtonProps {
  icon?: string
  title?: string
  onPress(): void
  disabled?: boolean
}

const ButtonComponent: React.FC<ButtonProps> = ({
  icon,
  title,
  onPress,
  disabled
}) => {
  return (
    <View pointerEvents={disabled ? 'none' : 'auto'}>
      <Button
        onPress={onPress}
        activeOpacity={0.7}
        onlyIcon={!title && Boolean(icon)}
        disabled={disabled}
      >
        {Boolean(icon) && <Button.Icon name={icon} size={24} />}

        {title && <Button.Text hasIcon={Boolean(icon)}>{title}</Button.Text>}
      </Button>
    </View>
  )
}

export default ButtonComponent
