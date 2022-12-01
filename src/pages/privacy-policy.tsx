import React, { FC } from "react"
import type { HeadFC, PageProps } from "gatsby"

import DefaultLayout from "../layouts/DefaultLayout"

export const Head: HeadFC = () => <title>Privacy Policy | EduHubAfric</title>

const PrivacyPolicyPage: FC<PageProps> = () => {
  return (
    <DefaultLayout>
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 flex justify-center">
          <article className="prose">
            <h1 className="font-black">Privacy Policy</h1>
            <p>Last Updated: August 8, 2022</p>
          </article>
        </div>
      </section>

      <section className="container mx-auto px-4 my-12 flex justify-center">
        <article className="prose">
          <p>
            Your privacy is important to us. It is EduHubAfric's policy to respect your privacy regarding 
            any information we may collect from you across our website, https://eduhubafric.com/.
            We collect personal data that you provide when you:
          </p>
          <p>
            - Contact us by email
          </p>
          <p>
            If you contact us by email, we will collect the information provided in your email, which 
            may include personal data such as your name, email address, telephone number, postal 
            address, or work information (e.g. company name, job title). mail address you submit to us.
          </p>
          <p>
            We only retain collected information for as long as necessary to provide you with your 
            requested service. What data we store, we'll protect within commercially acceptable means 
            to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or 
            modification.
          </p>
          <p>
            We don't share any personally identifying information publicly or with third-parties, 
            except when required to by law.
          </p>
          <p>
            We use Google Analytics (provided by Google, Inc.) to gather information about how users 
            interact with the Site. Google Analytics utilizes cookies.
          </p>
          <p>
            You are free to refuse our request for your personal information, with the understanding 
            that we may be unable to provide you with some of your desired services.
          </p>
          <p>
            Your continued use of our website will be regarded as acceptance of our practices around 
            privacy and personal information. If you have any questions about how we handle user data 
            and personal information, feel free to contact us.
          </p>
          <p>
            If you have questions regarding this Privacy Policy, please contact us at: 
            info@eduhubafric.com.
          </p>
        </article>
      </section>
    </DefaultLayout>
  )
}

export default PrivacyPolicyPage
