import React, { createContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { ChildrenInterface } from '../interfaces/ChildrenNode'
import { UserType } from '../interfaces/User'

type PropsAuthContext = {
  user: UserType
  setUser: React.Dispatch<React.SetStateAction<UserType>>
  signIn: (user: UserType) => Promise<void>
  signOut: () => Promise<void>
}

const DEFAULT_VALUE = {
  user: { id: '', name: '', email: '' },
  setUser: () => {},
}

const userKey = '@expo-firebase-auth-realtime-db:user'

const AuthContext = createContext({} as PropsAuthContext)

const AuthContextProvider: React.FC<ChildrenInterface> = ({ children }) => {
  const [user, setUser] = useState<UserType>(DEFAULT_VALUE.user)

  async function signIn(newUser: UserType) {
    try {
      await AsyncStorage.setItem(userKey, JSON.stringify(newUser))
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async function signOut() {
    setUser({ id: '', name: '', email: '' })
    await AsyncStorage.removeItem(userKey)
  }

  async function loadUser() {
    const userString = await AsyncStorage.getItem(userKey)
    const userData = userString ? JSON.parse(userString) : null

    return userData && setUser(userData)
  }

  useEffect(() => {
    loadUser()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
export { AuthContextProvider }
export default AuthContext
