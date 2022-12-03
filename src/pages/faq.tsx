import React, { FC } from "react"
import type { HeadFC, PageProps } from "gatsby"

import DefaultLayout from "../layouts/DefaultLayout"

export const Head: HeadFC = () => <title>FAQ | EduHubAfric</title>

const FAQPage: FC<PageProps> = () => {
  return (
    <DefaultLayout>
      {/* <section className="bg-gray-50 py-12">
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
      </section> */}
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl dark:text-white">FAQ's</h1>

          <hr className="my-6 border-gray-200 dark:border-gray-700" />

          <div>
            <div>
              <button className="flex items-center focus:outline-none">
                <svg className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>

                <h1 className="mx-4 text-xl text-gray-700 dark:text-white">How can I pay for my appointment ?</h1>
              </button>

              <div className="flex mt-8 md:mx-10">
                <span className="border border-blue-500"></span>

                <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.
                </p>
              </div>
            </div>

            <hr className="my-8 border-gray-200 dark:border-gray-700" />

            <div>
              <button className="flex items-center focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>

                <h1 className="mx-4 text-xl text-gray-700 dark:text-white">What can I expect at my first consultation ?</h1>
              </button>
            </div>

            <hr className="my-8 border-gray-200 dark:border-gray-700" />

            <div>
              <button className="flex items-center focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>

                <h1 className="mx-4 text-xl text-gray-700 dark:text-white">What are your opening hours ?</h1>
              </button>
            </div>

            <hr className="my-8 border-gray-200 dark:border-gray-700" />

            <div>
              <button className="flex items-center focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>

                <h1 className="mx-4 text-xl text-gray-700 dark:text-white">Do I need a referral ?</h1>
              </button>
            </div>

            <hr className="my-8 border-gray-200 dark:border-gray-700" />

            <div>
              <button className="flex items-center focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>

                <h1 className="mx-4 text-xl text-gray-700 dark:text-white">Is the cost of the appointment covered by private health insurance ?</h1>
              </button>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  )
}

export default FAQPage
