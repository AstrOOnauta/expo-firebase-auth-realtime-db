import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { Category, Image, Name, Price, ProductsCardContainer } from './style'

interface ProductsCardProps extends TouchableOpacityProps {}

export default function ProductsCard({ ...rest }: ProductsCardProps) {
  return (
    <ProductsCardContainer activeOpacity={0.6} {...rest}>
      <Image
        resizeMode="contain"
        source={{
          uri: 'https://rafaturis.com.br/wp-content/uploads/2014/01/default-placeholder.png',
        }}
      />
      <Name>Notebook</Name>
      <Category>Eletronics</Category>
      <Price>
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(Number('800'))}
      </Price>
    </ProductsCardContainer>
  )
}
