import styled from 'styled-components/native'

interface TypeButton {
  type: 'primary' | 'secondary' | 'danger'
}

export const ButtonContainer = styled.TouchableOpacity<TypeButton>`
  background-color: ${(props) =>
    props.type === 'primary' ? props.theme.colors.yellow : 'transparent'};
  align-items: center;
  width: 100%;
  padding: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
  elevation: ${(props) => (props.type === 'primary' ? 6 : 0)};
  shadow-color: ${(props) => props.theme.colors.grey900};
`

export const ButtonText = styled.Text<TypeButton>`
  color: ${(props) =>
    props.type === 'primary'
      ? props.theme.colors.grey100
      : props.type === 'secondary'
      ? props.theme.colors.yellow
      : props.theme.colors.red};
  font-size: 18px;
  font-weight: bold;
`
