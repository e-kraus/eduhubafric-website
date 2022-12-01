import React, { FC } from "react"
import type { HeadFC, PageProps } from "gatsby"

import DefaultLayout from "../layouts/DefaultLayout"

export const Head: HeadFC = () => <title>EduHubAfric</title>

const IndexPage: FC<PageProps> = () => {
  return (
    <DefaultLayout>
      Home
    </DefaultLayout>
  )
}

export default IndexPage
