import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AiOutlineMenu } from "react-icons/ai"
import { ImCancelCircle } from "react-icons/im"
import styles from "./NavBar.module.css"
import { useStoreAuth } from "src/store/authStore"
import useAuth from "src/hooks/useAuth"
import { useRouter } from "next/router"

const NavBar = () => {

  const router = useRouter()
  const auth = useStoreAuth( auth => auth )
  const { closeSession } = useAuth()
  const [menuMobile, setMenuMobile] = useState(false)

  const closeMenu = () => setMenuMobile(false)

  const UserExists = () => {
    if( auth.isLoggedIn === undefined )
      return null
    return (
      <>
        <li onClick={closeMenu}>
          <Link href={"/dashboard/profile"}>
            Perfil
          </Link>
        </li>

        <li onClick={ () => {
          closeSession()
          closeMenu()
          router.push("/")
        }}>
          <a className={styles.last_item}>Cerrar sesión</a>
        </li>
      </>
    )
  }


  const UserNotExists = () => {
    if( auth.isLoggedIn === undefined )
      return null
    return (
      <>
        <li onClick={closeMenu}>
          <Link href={"/login"} legacyBehavior>
            Iniciar sesión
          </Link>
        </li>
        <li onClick={closeMenu}>
          <Link href={"/register"} className={styles.last_item}>
            Registrarse
          </Link>
        </li>
      </>
    )
  }


  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div>
            <Image
              src={"/elephant-logo.png"}
              loading="lazy"
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
            <li onClick={closeMenu}>
              <Link href={"/"} >
                Casos
              </Link>
            </li>
            <li onClick={closeMenu}>
              <Link href={"/dashboard"}>
                Colaborar
              </Link>
            </li>
            {
              auth.isLoggedIn
              ? <UserExists />
              : <UserNotExists />
            }
          </ul>
      </header>
    </>
  )
}

export default NavBar
