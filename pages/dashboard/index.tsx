import Link from 'next/link';
import styles from 'styles/Dashboard.module.css';
import { RiAddCircleLine, RiEdit2Line, RiSettings2Line, RiStickyNoteLine } from 'react-icons/ri';

const Dashboard = () => {
  return (
    <>
      <div className={styles.navDashboard}>
          <Link href=''>
            <a>
              <RiAddCircleLine/> 
              <span>Agregar denuncia</span>
            </a>
          </Link>
          <Link href=''>
            <a>
              <RiEdit2Line/> 
              <span>Editar perfil</span>
            </a>
          </Link>
          <Link href=''>
            <a>
              <RiStickyNoteLine/> 
              <span>Mis notas</span>
            </a>
          </Link>
          <Link href=''>
            <a>
              <RiSettings2Line/>
              <span>Configuración</span>
            </a>
          </Link>
      </div>
    </>
  )
};

export default Dashboard;
