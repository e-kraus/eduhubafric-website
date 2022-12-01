import React, { FC } from "react"
import type { HeadFC, PageProps } from "gatsby"

import DefaultLayout from "../layouts/DefaultLayout"

export const Head: HeadFC = () => <title>Contact Us | EduHubAfric</title>

const ContactUsPage: FC<PageProps> = () => {
  return (
    <DefaultLayout>
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 flex justify-center">
          <article className="prose">
            <h1 className="font-black">We'd Love to hear from you</h1>
            <p>
              Wether you're curious about features, a free trail, or even press - we're ready to 
              answer any and all questions.
            </p>
          </article>
        </div>
      </section>

      <section className="container mx-auto px-4 my-12 flex justify-center">
        <article className="prose">
          <h3>Partnerships</h3>
          <p>
            We're into collaborations with awesome brands. Mail us, and our Partnerships Manager 
            will circle back.
          </p>
          <h3 className="text-indigo-600">partnerships@eduhubafric.com</h3>

          <hr />

          <h3>Support</h3>
          <p>Need a hand using EduHubAfric or managing your account? Reach us Through: </p>
          <h3 className="text-indigo-600">info@eduhubafric.com</h3>
          <h3 className="text-indigo-600">+(25z) 111 11111</h3>

          <hr />

          <h3>Socials</h3>
          <p>Need a hand using EduHubAfric or managing your account? Reach us Through: </p>
          <h3 className="text-indigo-600">Linkedin</h3>
          <h3 className="text-indigo-600">Twitter</h3>


        </article>
      </section>
    </DefaultLayout>
  )
}

export default ContactUsPage
