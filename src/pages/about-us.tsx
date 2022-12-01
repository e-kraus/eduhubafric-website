import React, { FC } from "react"
import type { HeadFC, PageProps } from "gatsby"

import DefaultLayout from "../layouts/DefaultLayout"
import AppCTA from "../components/AppCTA"

export const Head: HeadFC = () => <title>About Us | EduHubAfric</title>

const AboutUsPage: FC<PageProps> = () => {
  return (
    <DefaultLayout>
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 flex justify-center">
          <article className="prose">
            <h1 className="font-black">About Us</h1>
            <p>This is a profitable company </p>
          </article>
        </div>
      </section>

      <section className="container mx-auto px-4 my-12 flex justify-center">
        <article className="prose">
          <h3>Vision</h3>
          <p>
            STEM Education interventions that are responsive to Africa's context, needs &amp;
            aspirations.
          </p>

          <h3>Mission</h3>
          <p>
            To act as a gateway and gate-keeper for unique &amp; informed STEM ED collaborations 
            &amp; partnerships among African governments, education stakeholders &amp; global 
            education entities.
          </p>

        </article>
      </section>

      <AppCTA />
    </DefaultLayout>
  )
}

export default AboutUsPage
