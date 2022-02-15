import Link from 'next/link';
import styles from 'styles/Dashboard.module.css';
import { RiAddCircleLine, 
        RiEdit2Line, 
        RiSettings2Line, 
        RiStickyNoteLine,
        RiHome2Line } from 'react-icons/ri';
import { ReactElement } from 'react';
import { useRouter } from 'next/router';

interface Props {
  children: ReactElement | ReactElement[]
}

const LayoutDashboard = ({ children }: Props) => {

  const router = useRouter()

  const colorIcon = (path: string) => {
    return router.pathname === path ? '#005cd4' : '#000'
  }

  return (
    <>
      <div className={styles.navDashboard}>
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
          <Link href='/dashboard/edit'>
            <a>
              <RiEdit2Line
                color={colorIcon('/dashboard/edit')}
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
              <span>Configuración</span>
            </a>
          </Link>
      </div>
      <div className={styles.children}>
        { children }
      </div>
    </>
  )
};

export default LayoutDashboard;
