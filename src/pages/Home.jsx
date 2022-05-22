import React from 'react'
import Header from '../components/header/Header'
import Banner from '../components/home/Banner'
import Category from '../components/home/Category'
import Products from '../components/home/Products'

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Category />
      <Products />
    </>
  )
}
