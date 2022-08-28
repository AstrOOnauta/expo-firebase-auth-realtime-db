import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set, child, push } from 'firebase/database'

import Button from '../../components/Form/Button'
import Input from '../../components/Form/Input'
import { firebaseConfig } from '../../database/firebaseConnection'
import { CreateProductContainer, InputsField } from './style'
import { Alert, Keyboard, TouchableWithoutFeedback } from 'react-native'

export default function CreateProduct() {
  const [product, setProduct] = useState<string>('')
  const [category, setCategory] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  const [stock, setStock] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [imageUrl, setImageUrl] = useState<string>('')

  initializeApp(firebaseConfig)
  const navigation = useNavigation()

  async function handleSubmit() {
    if (product !== '' && category !== '' && price !== '' && stock !== '') {
      const db = await getDatabase()
      const newProductKey = await push(child(ref(db), 'products')).key

      const productDB = ref(db, 'products/' + newProductKey)

      const newProduct = {
        product,
        category,
        price,
        imageUrl,
        stock,
        description,
      }

      await set(productDB, newProduct)

      Alert.alert('Success', 'Product successfully created!')

      setProduct('')
      setCategory('')
      setPrice('')
      setImageUrl('')
      setStock('')
      setDescription('')

      navigation.navigate('Home' as never)
    } else {
      Alert.alert('Oops...', 'Fill all required fields!')
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <CreateProductContainer>
        <InputsField showsVerticalScrollIndicator={false}>
          <Input
            placeholder="Product name"
            placeholderTextColor="#AAAAAA"
            value={product}
            onChangeText={setProduct}
          />
          <Input
            placeholder="Category"
            placeholderTextColor="#AAAAAA"
            value={category}
            onChangeText={setCategory}
          />
          <Input
            placeholder="Price"
            placeholderTextColor="#AAAAAA"
            keyboardType="numeric"
            value={price}
            onChangeText={setPrice}
          />
          <Input
            placeholder="Amount in stock"
            placeholderTextColor="#AAAAAA"
            keyboardType="numeric"
            value={stock}
            onChangeText={setStock}
          />
          <Input
            placeholder="Description (optional)"
            placeholderTextColor="#AAAAAA"
            multiline={true}
            numberOfLines={4}
            onChangeText={setDescription}
            value={description}
          />
          <Input
            placeholder="Image URL (Optional)"
            placeholderTextColor="#AAAAAA"
            value={imageUrl}
            onChangeText={setImageUrl}
          />
        </InputsField>
        <Button title="ADD PRODUCT" type="primary" onPress={handleSubmit} />
      </CreateProductContainer>
    </TouchableWithoutFeedback>
  )
}
