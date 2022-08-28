import React, { useCallback, useContext, useState } from 'react'
import { ActivityIndicator, Modal } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { FlatGrid } from 'react-native-super-grid'
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, onValue } from 'firebase/database'

import Input from '../../components/Form/Input'
import ProductDetailsModal from '../../components/ProductDetailsModal'
import ProductCard from '../../components/ProductsCard'
import { firebaseConfig } from '../../database/firebaseConnection'
import AuthContext from '../../shared/context/AuthContext'
import { ProductResponse } from '../../shared/interfaces/ProductResponse'
import {
  BodyArea,
  Header,
  HomeContainer,
  SignOutButton,
  Icon,
  Welcome,
} from './style'

export default function Home() {
  const { signOut, user } = useContext(AuthContext)

  const [products, setProducts] = useState<ProductResponse[]>([])
  const [selectedProduct, setSelectedProduct] = useState({} as ProductResponse)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const [isLoading, setIsLoading] = useState<boolean>(false)

  initializeApp(firebaseConfig)

  function handleProduct(product: ProductResponse) {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  async function getProducts() {
    setIsLoading(true)

    const db = await getDatabase()
    const productsDB = ref(db, 'products')

    onValue(productsDB, (snapshot) => {
      setProducts([])
      snapshot.forEach((item) => {
        const newData = {
          id: item.key,
          product: item.val().product,
          price: item.val().price,
          category: item.val().category,
          imageUrl: item.val().imageUrl,
          description: item.val().description,
          stock: item.val().stock,
        }

        setProducts((olderArray) => [...olderArray, newData]) //conventional spread  no work here...
      })
    })

    setIsLoading(false)
  }

  useFocusEffect(
    useCallback(() => {
      getProducts()
    }, [])
  )

  return (
    <HomeContainer>
      <Header>
        <Welcome>Hello, {user.name}</Welcome>
        <SignOutButton activeOpacity={0.6} onPress={signOut}>
          <Icon name="power" />
        </SignOutButton>
      </Header>
      <BodyArea>
        <Input
          placeholder="Search an product or a category"
          placeholderTextColor="#AAAAAA"
          isSearch
        />
        {isLoading ? (
          <ActivityIndicator color="#FBB034" size={45} />
        ) : (
          <FlatGrid
            showsVerticalScrollIndicator={false}
            spacing={16}
            data={products}
            renderItem={({ item }) => {
              return (
                <ProductCard
                  key={item.id}
                  item={item}
                  onPress={() => handleProduct(item)}
                />
              )
            }}
          />
        )}
      </BodyArea>
      <Modal visible={isModalOpen}>
        <ProductDetailsModal
          product={selectedProduct}
          setIsModalOpen={setIsModalOpen}
        />
      </Modal>
    </HomeContainer>
  )
}
