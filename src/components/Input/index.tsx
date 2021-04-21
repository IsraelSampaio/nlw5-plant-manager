import React, { useState, useContext } from 'react'
import { TextInputProps } from 'react-native'

import { ThemeContext } from 'styled-components'

import Input from './styles'

const InputComponent: React.FC<TextInputProps> = ({ ...props }) => {
  const [isFocused, setFocused] = useState(false)
  const { colors } = useContext(ThemeContext)

  function handleInputFocus() {
    setFocused(true)
  }

  function handleInputBlur() {
    setFocused(false)
  }

  return (
    <Input
      {...props}
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      style={[isFocused && { borderColor: colors.green }]}
    />
  )
}

export default InputComponent
