import { ReactElement } from "react"
import { NavBar } from './index';

interface Props {
  children: ReactElement | ReactElement[]
}

const Layout = ( { children }: Props ) => {
  return (
    <>
      <NavBar />
      <main style={{maxWidth: '1800px', margin: '0 auto'}}>
        { children }
      </main>
    </>
  )
}

export default Layout
