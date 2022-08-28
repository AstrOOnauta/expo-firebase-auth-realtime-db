import React from 'react'
import Blob from '../../components/Blob'
import Button from '../../components/Form/Button'
import Input from '../../components/Form/Input'
import {
  ForgotPasswordButton,
  ForgotPasswordButtonArea,
  ForgotPasswordButtonText,
  SignInContainer,
} from './style'

export default function SignIn() {
  return (
    <SignInContainer>
      <Input placeholder="Email" placeholderTextColor="#AAAAAA" />
      <Input placeholder="Password" placeholderTextColor="#AAAAAA" isPassword />
      <ForgotPasswordButtonArea>
        <ForgotPasswordButton activeOpacity={0.6}>
          <ForgotPasswordButtonText>Forgot password?</ForgotPasswordButtonText>
        </ForgotPasswordButton>
      </ForgotPasswordButtonArea>
      <Button title="SIGN IN" type="primary" />
      <Button title="CREATE AN ACCOUNT" type="secondary" />
      <Blob isDark position="top-right" />
      <Blob isDark position="bottom-left" />
    </SignInContainer>
  )
}
