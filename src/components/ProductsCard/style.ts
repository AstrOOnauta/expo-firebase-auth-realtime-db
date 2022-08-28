import styled from 'styled-components/native'

export const ProductsCardContainer = styled.TouchableOpacity`
  width: 100%;
  padding: 16px;
  background-color: ${(props) => props.theme.colors.white};
  border-bottom-width: 4px;
  border-bottom-color: ${(props) => props.theme.colors.yellow};
  border-radius: 8px;
  align-items: center;
  elevation: 6;
  shadow-color: ${(props) => props.theme.colors.grey900};
`

export const Image = styled.ImageBackground`
  width: 100px;
  height: 65px;
  margin-bottom: 24px;
`

export const Name = styled.Text`
  color: ${(props) => props.theme.colors.grey900};
  font-size: 16px;
  font-weight: bold;
`

export const Category = styled.Text`
  color: ${(props) => props.theme.colors.grey500};
`

export const Price = styled.Text`
  color: ${(props) => props.theme.colors.yellow};
  font-size: 24px;
  font-weight: bold;
  margin-top: 16px;
`
