import { useNavigation } from '@react-navigation/native'
import React from 'react'
import BackButton from '../../components/BackButton'
import Blob from '../../components/Blob'
import Button from '../../components/Form/Button'

import Input from '../../components/Form/Input'
import { RecoveryPasswordContainer } from './style'

export default function RecoveryPassword() {
  const navigation = useNavigation()

  return (
    <RecoveryPasswordContainer>
      <BackButton onPress={() => navigation.navigate('SignIn' as never)} />
      <Input placeholder="Email" placeholderTextColor="#AAAAAA" />
      <Button title="SEND RECOVERY EMAIL" type="primary" />
      <Blob isDark position="top-left" />
      <Blob isDark position="bottom-right" />
    </RecoveryPasswordContainer>
  )
}
