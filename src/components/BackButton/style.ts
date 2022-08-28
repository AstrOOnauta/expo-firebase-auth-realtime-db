import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'

export const BackButtonContainer = styled.TouchableOpacity`
  position: absolute;
  top: 16px;
  left: 16px;
  padding: 8px 9px;
  background-color: ${(props) => props.theme.colors.yellow};
  border-radius: 50px;
`

export const Icon = styled(Ionicons)`
  font-size: 24px;
  color: ${(props) => props.theme.colors.grey100};
`
