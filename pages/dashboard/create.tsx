import React, { ReactElement } from 'react'
import LayoutDashboard from 'src/components/LayoutDasboard'

const Create = () => {
  return (
    <h1>create App</h1>
  )
}

export default Create

Create.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutDashboard>{page}</LayoutDashboard>
  )
}