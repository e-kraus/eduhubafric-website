import React, { FC, ReactNode } from "react"

import AppFooter from "../components/AppFooter"
import AppHeader from "../components/AppHeader"

interface IDefaultLayoutProps {
  children: ReactNode
}

const DefaultLayout: FC<IDefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <AppHeader />
        <main className="min-h-full mb-12">
          { children }
        </main>
      <AppFooter />
    </>
  )
}

export default DefaultLayout