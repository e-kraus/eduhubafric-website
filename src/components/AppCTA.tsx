import React, { FC } from "react"
import { Link } from "gatsby"

interface AppCTAProps {}

const AppCTA: FC<AppCTAProps> = () => {
  return (
    <section className="container mx-auto px-4 my-12 bg-gray-50">
      <div className="p-8 lg:flex lg:items-center lg:justify-between">
        <article className="prose">
          <h2>
            <span className="block">Ready to dive in?</span>
            <span className="block text-indigo-600">Get started today.</span>
          </h2>
        </article>

        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded shadow">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded bg-indigo-600 px-4 py-2 text-base font-medium text-white hover:bg-indigo-700"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppCTA