import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { ProductResponse } from '../../shared/interfaces/ProductResponse'
import { Category, Image, Name, Price, ProductsCardContainer } from './style'

interface ProductsCardProps extends TouchableOpacityProps {
  item: ProductResponse
}

export default function ProductsCard({ item, ...rest }: ProductsCardProps) {
  return (
    <ProductsCardContainer activeOpacity={0.6} {...rest}>
      <Image
        resizeMode="contain"
        source={{
          uri: item.imageUrl
            ? item.imageUrl
            : 'https://rafaturis.com.br/wp-content/uploads/2014/01/default-placeholder.png',
        }}
      />
      <Name>{item.product}</Name>
      <Category>{item.category}</Category>
      <Price>
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(Number(item.price))}
      </Price>
    </ProductsCardContainer>
  )
}
