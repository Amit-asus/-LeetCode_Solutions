import React from 'react'
import { ShoppingCartState } from '../context/context'

const Home = () => {
  const [page,set]

  const {
    state: { products },
  } = ShoppingCartState ;
  return (
    <div>Home some</div>
  )
}

export default Home