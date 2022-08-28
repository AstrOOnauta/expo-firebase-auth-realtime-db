import React from 'react'
import { Category, Image, Name, Price, ProductsCardContainer } from './style'

export default function ProductsCard() {
  return (
    <ProductsCardContainer activeOpacity={0.6}>
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
