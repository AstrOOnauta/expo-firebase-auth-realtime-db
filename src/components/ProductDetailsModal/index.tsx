import React, { Dispatch, SetStateAction } from 'react'
import { View } from 'react-native'
import Button from '../Form/Button'

import {
  Category,
  Description,
  DescriptionArea,
  HeaderInfoArea,
  Icon,
  IconButton,
  Image,
  ImageArea,
  Name,
  Price,
  ProductDetailsModalContainer,
} from './style'

interface ProductDetailsModalProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
}
export default function ProductDetailsModal({
  setIsModalOpen,
}: ProductDetailsModalProps) {
  return (
    <ProductDetailsModalContainer>
      <IconButton onPress={() => setIsModalOpen(false)}>
        <Icon name="arrow-back" />
      </IconButton>
      <ImageArea>
        <Image
          resizeMode="contain"
          source={{
            uri: 'https://rafaturis.com.br/wp-content/uploads/2014/01/default-placeholder.png',
          }}
        />
      </ImageArea>
      <HeaderInfoArea>
        <View>
          <Name>Notebook</Name>
          <Category>Eletronics</Category>
        </View>
        <Price>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(Number('800'))}
        </Price>
      </HeaderInfoArea>
      <DescriptionArea>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vel illum,
          libero voluptatibus mollitia officiis, minima dolorum facere quam
          laboriosam pariatur aliquam doloribus sequi dolore voluptate molestias
          animi maxime numquam id necessitatibus hic nostrum obcaecati! Nulla
          recusandae itaque architecto repellendus! Eum dignissimos cumque
          error? Nisi neque molestias non itaque error ratione, iste vel nam
          omnis debitis, similique perspiciatis accusantium cumque atque officia
          quos deserunt rerum quam tenetur quisquam quod. Voluptate harum
          facilis sequi quo, perferendis molestias eum vel qui cumque repellat
          excepturi perspiciatis quia sapiente non ipsum consequatur optio
          accusantium quidem alias cupiditate repudiandae rerum amet? Minima
          esse distinctio et! Doloremque ipsum cumque nulla minima harum,
          accusamus error ut mollitia quidem expedita. Exercitationem, deserunt.
          Quas at voluptatum et nam, a eligendi, quasi, sequi mollitia inventore
          quo nobis ut voluptate ex aperiam facilis alias? Cupiditate beatae
          nesciunt facilis. Accusantium esse suscipit enim dolorum recusandae
          ad, voluptatum perspiciatis eum odio earum aperiam!
        </Description>
      </DescriptionArea>
      <Button title="DELETE PRODUCT" type="danger" />
    </ProductDetailsModalContainer>
  )
}
