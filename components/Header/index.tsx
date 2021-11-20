import Link from 'next/link'
import styles from "../Header/Header.module.css";
import '/styles/Home.module.css';

export default function Header() {
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link href="/">Home</Link>
                </li>
                <li className={styles.item}>
                    <Link href="blog">Blog</Link>
                </li>
                <li className={styles.item}>
                    <Link href="users">Users</Link>
                </li>
            </ul>
        </div>
    )
}
