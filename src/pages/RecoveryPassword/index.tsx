import { useNavigation } from '@react-navigation/native'
import { initializeApp } from 'firebase/app'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import React, { useState } from 'react'
import { Alert, Keyboard, TouchableWithoutFeedback } from 'react-native'

import BackButton from '../../components/BackButton'
import Blob from '../../components/Blob'
import Button from '../../components/Form/Button'
import Input from '../../components/Form/Input'
import { firebaseConfig } from '../../database/firebaseConnection'
import { RecoveryPasswordContainer } from './style'

export default function RecoveryPassword() {
  const [email, setEmail] = useState<string>('')

  const navigation = useNavigation()

  const firebase = initializeApp(firebaseConfig)
  const auth = getAuth(firebase)

  async function handleSubmit() {
    if (email !== '') {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          Alert.alert('Success', 'Password reset email sent!', [
            {
              text: 'Ok',
              onPress: () => navigation.navigate('SignIn' as never),
            },
          ])
        })
        .catch((error) => {
          Alert.alert(error.code, error.message)
        })
    } else {
      Alert.alert('Fill the email field!')
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <RecoveryPasswordContainer>
        <BackButton onPress={() => navigation.navigate('SignIn' as never)} />
        <Input
          placeholder="Email"
          placeholderTextColor="#AAAAAA"
          value={email}
          onChangeText={setEmail}
        />
        <Button
          title="SEND RECOVERY EMAIL"
          type="primary"
          onPress={handleSubmit}
        />
        <Blob isDark position="top-left" />
        <Blob isDark position="bottom-right" />
      </RecoveryPasswordContainer>
    </TouchableWithoutFeedback>
  )
}
