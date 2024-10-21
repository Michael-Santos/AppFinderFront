import { Link } from 'react-router-dom';
import styles from './Header.module.css'

const Header = () => {
    return (
        <nav className={styles.navbar}>
            <p>aaaa</p>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to="">Nova consulta</Link>
                </li>
                <li className={styles.item}>
                    <Link to="/consultas">Consultas</Link>
                </li>
            </ul>
        </nav>  
    )
}

export default Header;