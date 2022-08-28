import React from 'react'
import { BlobContainer } from './style'

interface BlobProps {
  isDark?: boolean
  position: 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left'
}

export default function Blob({ isDark, position }: BlobProps) {
  return <BlobContainer isDark={isDark} position={position} />
}
