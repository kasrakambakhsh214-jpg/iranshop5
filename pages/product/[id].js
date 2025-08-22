import products from '../../data/products.json'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function ProductDetail() {
  const router = useRouter()
  const { id } = router.query
  const product = products.find(p => p.id === id)

  if (!product) return <div>محصول پیدا نشد.</div>

  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: 24 }}>
      <img src={product.image} style={{ width: 320, borderRadius: 8 }} alt={product.title} />
      <h1>{product.title}</h1>
      <p><b>قیمت:</b> {product.price}</p>
      <p>{product.description}</p>
      <Link href="/">بازگشت به فروشگاه</Link>
    </div>
  )
}