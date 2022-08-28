import { useNavigation } from '@react-navigation/native'
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useContext, useState } from 'react'
import { Alert } from 'react-native'

import Blob from '../../components/Blob'
import Button from '../../components/Form/Button'
import Input from '../../components/Form/Input'
import { firebaseConfig } from '../../database/firebaseConnection'
import AuthContext from '../../shared/context/AuthContext'
import {
  ForgotPasswordButton,
  ForgotPasswordButtonArea,
  ForgotPasswordButtonText,
  SignInContainer,
} from './style'

export default function SignIn() {
  const { signIn } = useContext(AuthContext)

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const navigation = useNavigation()

  const firebase = initializeApp(firebaseConfig)
  const auth = getAuth(firebase)

  async function handleSubmit() {
    if (email !== '' && password !== '') {
      await signInWithEmailAndPassword(auth, email, password)
        .then((response) => {
          const newUser = {
            id: response.user.uid,
            name: response.user.displayName as string,
            email: response.user.email as string,
          }

          signIn(newUser)

          setEmail('')
          setPassword('')
        })
        .catch((error) => {
          Alert.alert(error.code, error.message)
        })
    }
  }

  return (
    <SignInContainer>
      <Input
        placeholder="Email"
        placeholderTextColor="#AAAAAA"
        value={email}
        onChangeText={setEmail}
      />
      <Input
        placeholder="Password"
        placeholderTextColor="#AAAAAA"
        isPassword
        value={password}
        onChangeText={setPassword}
      />
      <ForgotPasswordButtonArea>
        <ForgotPasswordButton
          activeOpacity={0.6}
          onPress={() => navigation.navigate('RecoveryPassword' as never)}
        >
          <ForgotPasswordButtonText>Forgot password?</ForgotPasswordButtonText>
        </ForgotPasswordButton>
      </ForgotPasswordButtonArea>
      <Button title="SIGN IN" type="primary" onPress={handleSubmit} />
      <Button
        title="CREATE AN ACCOUNT"
        type="secondary"
        onPress={() => navigation.navigate('SignUp' as never)}
      />
      <Blob isDark position="top-right" />
      <Blob isDark position="bottom-left" />
    </SignInContainer>
  )
}
