import React, { useState } from 'react'
import { TextInputProps, TouchableOpacity } from 'react-native'

import { EyeIcon, InputContainer, InputArea } from './style'

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
        secureTextEntry={showPassword}
        activeOpacity={0.6}
        {...rest}
      />
      {isPassword && (
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeIcon name="eye-off" /> : <EyeIcon name="eye" />}
        </TouchableOpacity>
      )}
    </InputContainer>
  )
}
