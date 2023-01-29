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
      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={solid('house-user')} />
          </Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart">
            <FontAwesomeIcon icon={solid('cart-shopping')} />
          </Link>
        </li>
      </ul>
    </nav>
  )
}
