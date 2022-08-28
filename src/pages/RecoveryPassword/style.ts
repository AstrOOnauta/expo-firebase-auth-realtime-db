import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'

export const RecoveryPasswordContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.grey100};
  padding: 0 20px;
  justify-content: center;
`

export const IconButton = styled.TouchableOpacity`
  position: absolute;
  top: 16px;
  left: 16px;
  padding: 8px 9px;
  background-color: ${(props) => props.theme.colors.yellow};
  border-radius: 50px;
`

export const BackIcon = styled(Ionicons)`
  font-size: 24px;
  color: ${(props) => props.theme.colors.grey100};
`
