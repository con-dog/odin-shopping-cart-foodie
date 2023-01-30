import styles from '../styles/Home.module.css'
import splashImage from '../images/splash.png'

export default function Home() {
  return (
    <div className={styles.body}>
      <div>
        <h1 className={styles.h1}>Goodie</h1>
        <h2 className={styles.h2}>
          <em>Seriously good items ...</em>
        </h2>
      </div>
    </div>
  )
}
