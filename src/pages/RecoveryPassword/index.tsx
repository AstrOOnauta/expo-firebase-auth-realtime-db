import React from 'react'
import Blob from '../../components/Blob'
import Button from '../../components/Form/Button'

import Input from '../../components/Form/Input'
import { BackIcon, IconButton, RecoveryPasswordContainer } from './style'

export default function RecoveryPassword() {
  return (
    <RecoveryPasswordContainer>
      <IconButton activeOpacity={0.6}>
        <BackIcon name="arrow-back" />
      </IconButton>
      <Input placeholder="Email" placeholderTextColor="#AAAAAA" />
      <Button title="SEND RECOVERY EMAIL" type="primary" />
      <Blob isDark position="top-left" />
      <Blob isDark position="bottom-right" />
    </RecoveryPasswordContainer>
  )
}
