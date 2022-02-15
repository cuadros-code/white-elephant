import React, { ReactElement } from 'react'
import LayoutDashboard from 'src/components/LayoutDasboard'

const Setting = () => {
  return (
    <h1>setting App</h1>
  )
}

export default Setting

Setting.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutDashboard>{page}</LayoutDashboard>
  )
}