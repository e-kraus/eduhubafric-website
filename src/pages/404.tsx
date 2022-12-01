import React, { FC } from "react"
import { Link, HeadFC, PageProps } from "gatsby"

import DefaultLayout from "../layouts/DefaultLayout"

const NotFoundPage: FC<PageProps> = () => {
  return (
    <DefaultLayout>
      <p>
        Sorry 😔, we couldn't find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </DefaultLayout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found | EduHubAfric</title>
