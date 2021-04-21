import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'

import EnvironmentButton from './styles'

interface EnvironmentButtonProps extends RectButtonProps {
  title: string
  active?: boolean
}

const EnvironmentButtonComponent: React.FC<EnvironmentButtonProps> = ({
  title,
  active = false,
  ...restProps
}) => {
  return (
    <EnvironmentButton active={active} {...restProps}>
      <EnvironmentButton.Title active={active}>{title}</EnvironmentButton.Title>
    </EnvironmentButton>
  )
}

export default EnvironmentButtonComponent
