import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  solid,
  regular,
  brands,
  icon
} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <nav>
      <ul className={styles.ul}>
        <li>
          <Link to="/" className={styles.a}>
            <FontAwesomeIcon icon={solid('house-user')} />
          </Link>
        </li>
        <li>
          <Link to="/shop" className={styles.a}>
            Shop
          </Link>
        </li>
        <li className={styles.right}>
          <Link to="/cart" className={styles.a}>
            <FontAwesomeIcon icon={solid('cart-shopping')} />
          </Link>
        </li>
      </ul>
    </nav>
  )
}
