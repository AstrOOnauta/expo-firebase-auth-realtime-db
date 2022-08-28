import React from 'react'
import Blob from '../../components/Blob'
import Button from '../../components/Form/Button'

import Input from '../../components/Form/Input'
import { SignUpContainer } from './style'

export default function SignUp() {
  return (
    <SignUpContainer>
      <Input placeholder="Name" placeholderTextColor="#AAAAAA" isDark />
      <Input placeholder="Email" placeholderTextColor="#AAAAAA" isDark />
      <Input
        placeholder="Password"
        placeholderTextColor="#AAAAAA"
        isDark
        isPassword
      />
      <Button title="SIGN UP" type="primary" />
      <Button title="I HAVE AN ACCOUNT" type="secondary" />
      <Blob position="top-right" />
      <Blob position="bottom-left" />
    </SignUpContainer>
  )
}
