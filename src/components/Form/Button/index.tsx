import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { ButtonContainer, ButtonText } from './style'

interface ButtonProps extends TouchableOpacityProps {
  title: string
  type: 'primary' | 'secondary' | 'danger'
}

export default function Button({ title, type, ...rest }: ButtonProps) {
  return (
    <ButtonContainer activeOpacity={0.6} type={type} {...rest}>
      <ButtonText type={type}>{title}</ButtonText>
    </ButtonContainer>
  )
}
