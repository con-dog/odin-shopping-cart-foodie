import styles from '../styles/Card.module.css'

export default function Card({ product }) {
  console.log(product)
  return (
    <div className={styles.card}>
      <img src={product.thumbnail} alt={product.title} className={styles.img} />
      <h4 className={styles.h4}>{product.title}</h4>
      <p className={styles.p}>${product.price}</p>
      <p className={styles.p}>{product.description}</p>
      <p className={styles.p}>{product.rating}</p>
    </div>
  )
}
