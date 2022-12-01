import React, { FC } from "react"
import type { HeadFC, PageProps } from "gatsby"

import DefaultLayout from "../layouts/DefaultLayout"

export const Head: HeadFC = () => <title>FAQ | EduHubAfric</title>

const FAQPage: FC<PageProps> = () => {
  return (
    <DefaultLayout>
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 flex justify-center">
          <article className="prose">
            <h1 className="font-black">Frequently Asked Questions</h1>
          </article>
        </div>
      </section>

      <section className="container mx-auto px-4 my-12 flex justify-center">
        <article className="prose">
          <details>
            <summary>Details</summary>
            Something small enough to escape casual notice.
          </details>
        </article>
      </section>
    </DefaultLayout>
  )
}

export default FAQPage
