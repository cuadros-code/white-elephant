import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AiOutlineMenu } from "react-icons/ai"
import { ImCancelCircle } from "react-icons/im"
import styles from "./NavBar.module.css"

const NavBar = () => {

  const [menuMobile, setMenuMobile] = useState(false)

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div>
            <Image
              src={"/elephant-logo.png"}
              alt="logo"
              width={40}
              height={40}
              objectFit="contain"
              quality={100}
            />
          </div>

          <button 
          className={`${styles.button_menu}`}
          >
            {
              menuMobile 
              ? <ImCancelCircle 
                size={25} 
                onClick={() => setMenuMobile(!menuMobile)}
              />
              : <AiOutlineMenu  
                size={25} 
                onClick={() => setMenuMobile(!menuMobile)} 
              /> 
            }
          </button>

          
          
        </nav>
          <ul className={`${styles.nav_list} ${menuMobile ? styles.active : ""}`}>
            <li>
              <Link href={"/"}>
                <a>Colaborar</a>
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <a>Casos</a>
              </Link>
            </li>
            <li>
              <Link href={"/login"}>
                <a>Iniciar sesión</a>
              </Link>
            </li>
            <li>
              <Link href={"/register"}>
                <a className={styles.last_item}>Registrarse</a>
              </Link>
            </li>
          </ul>
      </header>
    </>
  )
}

export default NavBar
