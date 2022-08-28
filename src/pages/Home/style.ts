import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

export const HomeContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.grey100};
`

export const Header = styled.View`
  width: 100%;
  height: 120px;
  padding: 0 16px;
  padding-bottom: 16px;
  background-color: ${(props) => props.theme.colors.grey900};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Welcome = styled.Text`
  color: ${(props) => props.theme.colors.grey100};
  font-size: 16px;
  font-weight: bold;
`

export const SignOutButton = styled.TouchableOpacity``

export const Icon = styled(Feather)`
  font-size: 28px;
  color: ${(props) => props.theme.colors.red};
`

export const BodyArea = styled.View`
  flex: 1;
  padding: 0 16px;
  margin-top: -28px;
`
