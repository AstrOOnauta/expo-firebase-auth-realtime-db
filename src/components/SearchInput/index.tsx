/* eslint-disable react-hooks/exhaustive-deps */
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { TextInputProps, TouchableOpacity } from 'react-native'

import { Icon, SearchInputContainer, Input } from './style'
import { ProductResponse } from '../../shared/interfaces/ProductResponse'

interface InputProps extends TextInputProps {
  products: ProductResponse[]
  setFilteredProducts: Dispatch<SetStateAction<ProductResponse[]>>
}

export default function SearchInput({
  products,
  setFilteredProducts,
  ...rest
}: InputProps) {
  const [search, setSearch] = useState<string>('')

  function handleSubmit() {
    if (search === '') {
      setFilteredProducts(products)
    } else {
      const filteredProducts = products.filter((product) => {
        return (
          product.product.toUpperCase().includes(search.toUpperCase()) ||
          product.category.toUpperCase().includes(search.toUpperCase())
        )
      })
      setFilteredProducts(filteredProducts)
    }
  }

  useEffect(() => {
    if (search === '') {
      setFilteredProducts(products)
    }
  }, [search])

  return (
    <SearchInputContainer>
      <Input
        activeOpacity={0.6}
        {...rest}
        value={search}
        onChangeText={setSearch}
      />
      <TouchableOpacity activeOpacity={0.6} onPress={handleSubmit}>
        <Icon name="search" />
      </TouchableOpacity>
    </SearchInputContainer>
  )
}
