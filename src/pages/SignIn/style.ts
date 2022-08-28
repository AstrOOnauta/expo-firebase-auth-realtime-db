import styled from 'styled-components/native'

export const SignInContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.grey100};
  padding: 0 20px;
  justify-content: center;
  padding-top: 80px;
`

export const ForgotPasswordButtonArea = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`
export const ForgotPasswordButton = styled.TouchableOpacity`
  background-color: transparent;
  align-items: center;
  margin-bottom: 24px;
`
export const ForgotPasswordButtonText = styled.Text`
  color: ${(props) => props.theme.colors.grey500};
  font-size: 14;
`
