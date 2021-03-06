import { ReactElement, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { RiAddCircleLine, 
        RiEdit2Line, 
        RiSettings2Line, 
        RiStickyNoteLine,
        RiHome2Line } from 'react-icons/ri';
import styles from 'styles/Dashboard.module.css';
import useProtected from 'src/hooks/useProtected';
interface Props {
  children: ReactElement | ReactElement[]
}

function getWindowDimensions() {
  if(typeof window === 'undefined') return 
  const { innerWidth: width } = window;
  let validate = width <= 600? true : false
  return validate
}

const LayoutDashboard = ({ children }: Props) => {

  const [openMenu, setOpenMenu] = useState(getWindowDimensions())
  const router = useRouter()
  
  const { unauthenticatedUser } = useProtected('/login', 'private')

  useEffect(() => {
    function handleResize() {
      const width = getWindowDimensions();
      setOpenMenu(width)
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const colorIcon = (path: string) => {
    return router.pathname === path ? '#005cd4' : '#000'
  }

  if(unauthenticatedUser) return null 
    
  return (
    <>
      <div 
        className={`${styles.navDashboard} ${openMenu ? styles.active : ''}`}
      >
          
          <Link href='/dashboard'>
            <a>
              <RiHome2Line 
                color={colorIcon('/dashboard')}
              /> 
              <span>Panel</span>
            </a>
          </Link>
          <Link href='/dashboard/create'>
            <a>
              <RiAddCircleLine 
                color={colorIcon('/dashboard/create')}
              /> 
              <span>Agregar denuncia</span>
            </a>
          </Link>
          <Link href='/dashboard/profile'>
            <a>
              <RiEdit2Line
                color={colorIcon('/dashboard/profile')}
              /> 
              <span>Editar perfil</span>
            </a>
          </Link>
          <Link href='/dashboard/notes'>
            <a>
              <RiStickyNoteLine
                color={colorIcon('/dashboard/notes')}
              /> 
              <span>Mis notas</span>
            </a>
          </Link>
          <Link href='/dashboard/setting'>
            <a>
              <RiSettings2Line
                color={colorIcon('/dashboard/setting')}
              />
              <span>Configuraci??n</span>
            </a>
          </Link>
        <button className={styles.actionMenu} onClick={() => setOpenMenu(!openMenu)} >
          { openMenu ? '>' : '<'} 
        </button>
      </div>
      <div 
        className={`${styles.children} ${!openMenu ? styles.layout : ''}`}
      >
        { children }
      </div>
    </>
  )
};

export default LayoutDashboard;
