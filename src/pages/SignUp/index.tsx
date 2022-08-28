import React, { useState } from 'react'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'

import Blob from '../../components/Blob'
import Button from '../../components/Form/Button'
import Input from '../../components/Form/Input'
import { firebaseConfig } from '../../database/firebaseConnection'
import { SignUpContainer } from './style'

export default function SignUp() {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const navigation = useNavigation()

  const firebase = initializeApp(firebaseConfig)
  const auth = getAuth(firebase)

  async function handleSubmit() {
    if (name !== '' || email !== '' || password !== '') {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          updateProfile(auth.currentUser!, {
            displayName: name,
          })
            .then(() => {
              Alert.alert('Success', 'User successfully created!', [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('SignIn' as never),
                },
              ])

              setName('')
              setEmail('')
              setPassword('')
            })
            .catch((error) => {
              Alert.alert(error.code, error.message)
            })
        })
        .catch((error) => {
          Alert.alert('Error', error.message)
        })
    }
  }

  return (
    <SignUpContainer>
      <Input
        placeholder="Name"
        placeholderTextColor="#AAAAAA"
        isDark
        value={name}
        onChangeText={setName}
      />
      <Input
        placeholder="Email"
        placeholderTextColor="#AAAAAA"
        isDark
        value={email}
        onChangeText={setEmail}
      />
      <Input
        placeholder="Password"
        placeholderTextColor="#AAAAAA"
        isDark
        isPassword
        value={password}
        onChangeText={setPassword}
      />
      <Button title="SIGN UP" type="primary" onPress={handleSubmit} />
      <Button
        title="I HAVE AN ACCOUNT"
        type="secondary"
        onPress={() => navigation.navigate('SignIn' as never)}
      />
      <Blob position="top-right" />
      <Blob position="bottom-left" />
    </SignUpContainer>
  )
}
