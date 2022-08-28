import styled from 'styled-components/native'

export const ProductDetailsModalContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.grey900};
  padding: 30px;
`

export const ImageArea = styled.View`
  align-items: center;
`

export const Image = styled.ImageBackground`
  width: 300px;
  height: 200px;
  margin: 0 32px;
`

export const HeaderInfoArea = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin: 16px 0;
`

export const Name = styled.Text`
  color: ${(props) => props.theme.colors.grey100};
  font-size: 24px;
  font-weight: bold;
`

export const Category = styled.Text`
  color: ${(props) => props.theme.colors.grey500};
`

export const Price = styled.Text`
  color: ${(props) => props.theme.colors.yellow};
  font-size: 24px;
  font-weight: bold;
`

export const DescriptionArea = styled.ScrollView`
  margin-top: 16px;
  width: 100%;
  color: ${(props) => props.theme.colors.yellow};
`

export const Description = styled.Text`
  color: ${(props) => props.theme.colors.grey500};
`
