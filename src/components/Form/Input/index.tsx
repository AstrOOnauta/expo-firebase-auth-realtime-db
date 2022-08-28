import React, { useState } from 'react'
import { TextInputProps, TouchableOpacity } from 'react-native'

import { Icon, InputContainer, InputArea } from './style'

interface InputProps extends TextInputProps {
  isDark?: boolean
  isPassword?: boolean
}

export default function Input({ isPassword, ...rest }: InputProps) {
  const [showPassword, setShowPassword] = useState<boolean>(true)

  return (
    <InputContainer>
      <InputArea
        isPassword
        secureTextEntry={isPassword && showPassword}
        activeOpacity={0.6}
        {...rest}
      />
      {isPassword && (
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <Icon name="eye-off" /> : <Icon name="eye" />}
        </TouchableOpacity>
      )}
    </InputContainer>
  )
}
