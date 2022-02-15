import React, { ReactElement } from 'react'
import LayoutDashboard from 'src/components/LayoutDasboard'

const Notes = () => {
  return (
    <h1>notes App</h1>
  )
}

export default Notes

Notes.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutDashboard>{page}</LayoutDashboard>
  )
}