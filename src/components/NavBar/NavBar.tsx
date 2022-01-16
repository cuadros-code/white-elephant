import Image from "next/image"
import styles from "./NavBar.module.css"
import Link from "next/link"
import { useState } from "react"

const NavBar = () => {

  const [menuMobile, setMenuMobile] = useState(false)

  return (
    <header>
      <nav className={styles.nav}>
        <div>
          <Image 
            src={"/elephant-logo.png"}
            alt="logo"
            width={35}
            height={35}
            quality={100}
          />
        </div>

        <div>
          <ul className={styles.nav_list}>
            <li>
              <Link href={""}>
                <a>Colaborar</a>
              </Link>
            </li>
            <li>
              <Link href={""}>
                <a>Casos</a>
              </Link>
            </li>
            <li>
              <Link href={""}>
                <a>Iniciar sesión</a>
              </Link>
            </li>
            <li>
              <Link href={""}>
                <a className={styles.last_item}>Registrarse</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
