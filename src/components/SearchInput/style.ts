import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

export const SearchInputContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Input = styled.TextInput`
  width: 100%;
  padding: 16px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 4px;
  color: ${(props) => props.theme.colors.grey900};
  margin-bottom: 10px;
  max-height: 200px;
  padding-right: 52px;
`

export const Icon = styled(Feather)`
  font-size: 24px;
  color: ${(props) => props.theme.colors.grey500};
  margin-left: -40px;
  margin-top: -8px;
`
