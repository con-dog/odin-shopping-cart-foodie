import { useEffect, useState } from 'react'
import Card from './Card'

export default function Shop() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts().then((products) => setProducts(products))
  }, [])

  async function fetchProducts() {
    return await fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((json) => json.products)
  }

  return (
    <div>
      <h1>Shop</h1>
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  )
}
