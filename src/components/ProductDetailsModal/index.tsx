import { getDatabase, ref, remove } from 'firebase/database'
import React, { Dispatch, SetStateAction } from 'react'
import { Alert, View } from 'react-native'
import { ProductResponse } from '../../shared/interfaces/ProductResponse'
import BackButton from '../BackButton'
import Button from '../Form/Button'

import {
  Category,
  Description,
  DescriptionArea,
  HeaderInfoArea,
  Image,
  ImageArea,
  Name,
  Price,
  ProductDetailsModalContainer,
  Stock,
} from './style'

interface ProductDetailsModalProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
  product: ProductResponse
}
export default function ProductDetailsModal({
  product,
  setIsModalOpen,
}: ProductDetailsModalProps) {
  async function handleDeleteProduct() {
    const db = await getDatabase()

    const productDB = ref(db, 'products/' + product.id)

    remove(productDB)
      .then(() => {
        Alert.alert('Success', 'Product successfully deleted!')
      })
      .catch((error) => {
        Alert.alert(error.code, error.message)
      })

    setIsModalOpen(false)
  }

  return (
    <ProductDetailsModalContainer>
      <BackButton onPress={() => setIsModalOpen(false)} />
      <ImageArea>
        <Image
          resizeMode="contain"
          source={{
            uri: product.imageUrl
              ? product.imageUrl
              : 'https://rafaturis.com.br/wp-content/uploads/2014/01/default-placeholder.png',
          }}
        />
      </ImageArea>
      <HeaderInfoArea>
        <View>
          <Name>{product.product}</Name>
          <Category>{product.category}</Category>
        </View>
        <Price>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(Number(product.price))}
        </Price>
      </HeaderInfoArea>
      <DescriptionArea showsVerticalScrollIndicator={false}>
        <Description>{product.description}</Description>
      </DescriptionArea>
      <Stock>
        Stock: {product.stock}&nbsp;
        {Number(product.stock) > 1 ? 'unities' : 'unity'}
      </Stock>
      <Button
        title="DELETE PRODUCT"
        type="danger"
        onPress={handleDeleteProduct}
      />
    </ProductDetailsModalContainer>
  )
}
