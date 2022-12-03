import React, { FC } from "react"
import type { HeadFC, PageProps } from "gatsby"

import DefaultLayout from "../../layouts/DefaultLayout"

export const Head: HeadFC = () => <title>Cookie Policy | EduHubAfric</title>

const CookiePolicyPage: FC<PageProps> = () => {
  return (
    <DefaultLayout>
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 flex justify-center">
          <article className="prose">
            <h1 className="font-black">Cookie Policy</h1>
            <p>Last Updated: August 8, 2022</p>
          </article>
        </div>
      </section>

      <section className="container mx-auto px-4 my-12 flex justify-center">
        <article className="prose">
          <p>
            This cookie policy ("Policy") describes what cookies are and how and they're being used by 
            the EduHubAfric website ("Website" or "Service") and any of its related products and 
            services (collectively, "Services"). This Policy is a legally binding agreement between 
            you ("User", "you" or "your") and One EduHubAfric Ltd ("One EduHubAfric Ltd", "we", "us" or 
            "our"). You should read this Policy so you can understand the types of cookies we use, the 
            information we collect using cookies and how that information is used. It also describes 
            the choices available to you regarding accepting or declining the use of cookies. For 
            further information on how we use, store and keep your personal data secure, see our 
            Privacy Policy.
          </p>

          <h3>What are cookies?</h3>
          <p>
            Cookies are small pieces of data stored in text files that are saved on your computer or 
            other devices when websites are loaded in a browser. They are widely used to remember you 
            and your preferences, either for a single visit (through a "session cookie") or for
            multiple repeat visits (using a "persistent cookie").
          </p>

          <p>
            Session cookies are temporary cookies that are used during the course of your visit to the 
            Website, and they expire when you close the web browser.
          </p>
          
          <p>
            Persistent cookies are used to remember your preferences within our Website and remain on 
            your desktop or mobile device even after you close your browser or restart your computer. 
            They ensure a consistent and efficient experience for you while visiting the Website and 
            Services.
          </p>

          <p>
            Cookies may be set by the Website ("first-party cookies"), or by third parties, such as 
            those who serve content or provide advertising or analytics services on the Website 
            ("third party cookies"). These third parties can recognize you when you visit our website 
            and also when you visit certain other websites.
          </p>

          <h3>What type of cookies do we use?</h3>

          <ul>
            <li>
              <strong>Necessary cookies</strong> allow us to offer you the best possible experience 
              when accessing and navigating through our Website and using its features. For example, 
              these cookies let us recognize that you have created an account and have logged into 
              that account to access the content.
            </li>

            <li>

              <strong>Functionality cookies</strong> let us operate the Website and Services in 
              accordance with the choices you make. For example, we will recognize your username and 
              remember how you customized the Website and Services during future visits.
            </li>

            <li>
              <strong>Analytics Cookies</strong> cookies enable us and third party services to collect 
              aggregated data for statistical purposes on how our visitors use the Website. These 
              cookies do not contain personal information such as names and email addresses and are 
              used to help us improve your user experience of the Website.
            </li>
          </ul>

          <h3>Third Party Choice</h3>
          <p>
            We use Google Analytics, HotJar and FullStory to help us understand how our customers use 
            the site.
          </p>
        </article>
      </section>
    </DefaultLayout>
  )
}

export default CookiePolicyPage
