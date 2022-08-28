import React, { useCallback, useContext, useEffect, useState } from 'react'
import {
  ActivityIndicator,
  Keyboard,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import { FlatGrid } from 'react-native-super-grid'
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, onValue } from 'firebase/database'

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
import SearchInput from '../../components/SearchInput'

export default function Home() {
  const { signOut, user } = useContext(AuthContext)

  const [products, setProducts] = useState<ProductResponse[]>([])
  const [filteredProducts, setFilteredProducts] = useState<ProductResponse[]>(
    []
  )
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

  useEffect(() => {
    setFilteredProducts(products)
  }, [products])

  useFocusEffect(
    useCallback(() => {
      getProducts()
    }, [])
  )

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <HomeContainer>
        <Header>
          <Welcome>Hello, {user.name}</Welcome>
          <SignOutButton activeOpacity={0.6} onPress={signOut}>
            <Icon name="power" />
          </SignOutButton>
        </Header>
        <BodyArea>
          <SearchInput
            placeholder="Search an product or a category"
            placeholderTextColor="#AAAAAA"
            products={products}
            setFilteredProducts={setFilteredProducts}
          />
          {isLoading ? (
            <ActivityIndicator color="#FBB034" size={45} />
          ) : (
            <FlatGrid
              showsVerticalScrollIndicator={false}
              spacing={16}
              data={filteredProducts}
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
    </TouchableWithoutFeedback>
  )
}
