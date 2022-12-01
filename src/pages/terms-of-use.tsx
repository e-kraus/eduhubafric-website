import React, { FC } from "react"
import type { HeadFC, PageProps } from "gatsby"

import DefaultLayout from "../layouts/DefaultLayout"

export const Head: HeadFC = () => <title>Terms Of Use | EduHubAfric</title>

const TermsOfUsePage: FC<PageProps> = () => {
  return (
    <DefaultLayout>
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 flex justify-center">
          <article className="prose">
            <h1 className="font-black">Terms Of Service</h1>
            <p>Last Updated: August 8, 2022</p>
          </article>
        </div>
      </section>

      <section className="container mx-auto px-4 my-12 flex justify-center">
        <article className="prose">
          <h3>1. Terms</h3>
          <p>
            By accessing this web site, you are agreeing to be bound by these web site Terms and 
            Conditions of Use, all applicable laws and regulations, and agree that you are responsible 
            for compliance with any applicable local laws.
          </p>
          <p>
            If you do not agree with any of these terms, you are prohibited from using or accessing 
            this site. The materials contained in this web site are protected by applicable copyright 
            and trade mark law.
          </p>
          
          <h3>2. Use License</h3>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or 
            software) on EduHubAfric's web site for personal, non-commercial transitory viewing 
            only. This is the grant of a license, not a transfer of title, and under this license you 
            may not: 
          </p>
          <ul>
            <li>Modify or copy the materials.</li>
            <li>
              Use the materials for any commercial purpose, or for any public display (commercial or 
              non-commercial).
            </li>
            <li>
              Attempt to decompile or reverse engineer any software contained on eduhubafric.com's web 
              site
            </li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>
              Transfer the materials to another person or “mirror” the materials on any other server.
            </li>
          </ul>
          <p>
            This license shall automatically terminate if you violate any of these restrictions and 
            may be terminated by EduHubAfric at any time. Upon terminating your viewing of these 
            materials or upon the termination of this license, you must destroy any downloaded 
            materials in your possession whether in electronic or printed format.
          </p>
          <h3>3. Disclaimer</h3>
          <p>
            The materials on EduHubAfric's web site are provided “as is”. EduHubAfric makes no warranties, 
            expressed or implied, and hereby disclaims and negates all other warranties, including 
            without limitation, implied warranties or conditions of merchantability, fitness for a 
            particular purpose, or non-infringement of intellectual property or other violation of 
            rights. Further, EduHubAfric does not warrant or make any representations concerning the 
            accuracy, likely results, or reliability of the use of the materials on its Internet web 
            site or otherwise relating to such materials or on any sites linked to this site.
          </p>
          <h3>4. Limitations</h3>
          <p>
            In no event shall EduHubAfric or its suppliers be liable for any damages (including, without 
            limitation, damages for loss of data or profit, or due to business interruption,) arising 
            out of the use or inability to use the materials on EduHubAfric's Internet site, even if 
            EduHubAfric or a EduHubAfric authorized representative has been notified orally or in writing 
            of the possibility of such damage. Because some jurisdictions do not allow limitations on 
            implied warranties, or limitations of liability for consequential or incidental damages, 
            these limitations may not apply to you.
          </p>
          <h3>5. Revisions and Errata</h3>
          <p>
            The materials appearing on EduHubAfric's web site could include technical, typographical, or 
            photographic errors. EduHubAfric does not warrant that any of the materials on its web site 
            are accurate, complete, or current. EduHubAfric may make changes to the materials contained 
            on its web site at any time without notice. EduHubAfric does not, however, make any 
            commitment to update the materials.
          </p>
          <h3>6. Links</h3>
          <p>
            EduHubAfric has not reviewed all of the sites linked to its Internet web site and is not 
            responsible for the contents of any such linked site. The inclusion of any link does not 
            imply endorsement by EduHubAfric of the site. Use of any such linked web site is at the 
            user's own risk.
          </p>
          <h3>7. Site Terms of Use Modifications</h3>
          <p>
            EduHubAfric may revise these terms of use for its web site at any time without notice. By 
            using this web site you are agreeing to be bound by the then current version of these 
            Terms and Conditions of Use.
          </p>
          <h3>8. Governing Law</h3>
          <p>
            Any claim relating to EduHubAfric's web site shall be governed by the laws of the Republic 
            of Kenya without regard to its conflict of law provisions. General Terms and Conditions 
            applicable to Use of a Web Site.
          </p>
          <h3>9. Refund Policy</h3>
          <p>We do not provide refunds.</p>
        </article>
      </section>
    </DefaultLayout>
  )
}

export default TermsOfUsePage
