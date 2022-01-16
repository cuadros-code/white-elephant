import { ReactElement } from "react"
import { NavBar } from './index';

interface Props {
  children: ReactElement | ReactElement[]
}

const Layout = ( { children }: Props ) => {
  return (
    <>
      <NavBar />
      <main>
        { children }
      </main>
    </>
  )
}

export default Layout
