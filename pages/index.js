import Link from 'next/link'
import products from '../data/products.json'

export default function Home() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: 24 }}>
      <h1>فروشگاه لپتاپ و اکسسوری</h1>
      <p>به فروشگاه ما خوش آمدید! بهترین محصولات دیجیتال را با بهترین قیمت مشاهده کنید.</p>
      <h2>محصولات ویژه</h2>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        {products.map(product => (
          <div key={product.id} style={{
            background: '#fff', padding: 16, borderRadius: 8, width: 250, boxShadow: '0 2px 8px #eee'
          }}>
            <img src={product.image} style={{ width: '100%', borderRadius: 6 }} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <Link href={`/product/${product.id}`}>مشاهده جزئیات</Link>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 48 }}>
        <Link href="/about">درباره ما</Link> | <Link href="/contact">تماس با ما</Link>
      </div>
    </div>
  )
}