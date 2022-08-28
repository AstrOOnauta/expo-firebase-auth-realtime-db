import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { BackButtonContainer, Icon } from './style'

interface BackButtonProps extends TouchableOpacityProps {}

export default function BackButton({ ...rest }: BackButtonProps) {
  return (
    <BackButtonContainer activeOpacity={0.6} {...rest}>
      <Icon name="arrow-back" />
    </BackButtonContainer>
  )
}
