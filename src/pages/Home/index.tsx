import React, { useState } from 'react'
import { Modal } from 'react-native'
import { FlatGrid } from 'react-native-super-grid'

import Input from '../../components/Form/Input'
import ProductDetailsModal from '../../components/ProductDetailsModal'
import ProductCard from '../../components/ProductsCard'
import {
  BodyArea,
  Header,
  HomeContainer,
  SignOutButton,
  Icon,
  Welcome,
} from './style'

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <HomeContainer>
      <Header>
        <Welcome>Hello, Will</Welcome>
        <SignOutButton activeOpacity={0.6}>
          <Icon name="power" />
        </SignOutButton>
      </Header>
      <BodyArea>
        <Input
          placeholder="Search an product or a category"
          placeholderTextColor="#AAAAAA"
          isSearch
        />
        <FlatGrid
          showsVerticalScrollIndicator={false}
          spacing={16}
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          renderItem={() => {
            return <ProductCard onPress={() => setIsModalOpen(true)} />
          }}
        />
      </BodyArea>
      <Modal visible={isModalOpen}>
        <ProductDetailsModal setIsModalOpen={setIsModalOpen} />
      </Modal>
    </HomeContainer>
  )
}
