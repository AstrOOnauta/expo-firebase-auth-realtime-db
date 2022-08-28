import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

interface ThemeProps {
  isDark: boolean
  isPassword: boolean
}

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

export const InputArea = styled.TextInput<ThemeProps>`
  width: 100%;
  padding: 16px;
  background-color: ${(props) =>
    props.isDark ? props.theme.colors.grey700 : props.theme.colors.white};
  border-radius: 4px;
  color: ${(props) =>
    props.isDark ? props.theme.colors.grey100 : props.theme.colors.grey900};
  margin-bottom: 10px;
  max-height: 200px;
  padding-right: ${(props) => (props.isPassword ? 52 : 16)};
`

export const Icon = styled(Feather)<ThemeProps>`
  font-size: 24px;
  color: ${(props) => props.theme.colors.grey500};
  margin-left: -40px;
  margin-top: -8px;
`
