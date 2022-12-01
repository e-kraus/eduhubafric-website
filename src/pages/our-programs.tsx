import React, { FC } from "react"
import type { HeadFC, PageProps } from "gatsby"

import { BoltIcon } from '@heroicons/react/24/outline'

import DefaultLayout from "../layouts/DefaultLayout"
import AppCTA from "../components/AppCTA"

export const Head: HeadFC = () => <title>Our Programs | EduHubAfric</title>

const features = [
  {
    name: 'STEM ED Research Group',
    description:
      `
        Through tailor-made consultancies & or CSR programs, EduHubAfric facilitates, creates, 
        supports & contributes to unique research collaborations/assignments (regional and or global
        ) to inform inclusive & transformative policy, practice & interventions for teaching, 
        learning and assessment of STEM disciplines at all levels of learning in the African 
        continent.
      `,
      icon: BoltIcon,
  },
  {
    name: 'Professional Learning Program',
    description:
      `
        Through tailor-made consultancies and corporate social responsibility programs, EduHubAfric 
        facilitates, creates and supports unique collaborations between African governments, local 
        and international institutions, NGOs and other regional and global entities to shape and 
        implement research-informed, evidence-based and contextually grounded interventions for 
        professional learning of STEM teachers and tutors at primary,  secondary and tertiary 
        institutions (mainstream & TVET). 
      `,
      icon: BoltIcon,
  },
  {
    name: 'Student Programs',
    description: `
      EduHubAfric facilitates, creates and supports collaborations with various stakeholders in 
      public and private sectors in mobilizing, training and supporting the participation of 
      students from across the African continent in key STEM ED competitions (such as the Olympiad 
      competitions) within the continent and across the globe.
      Through customized consulting arrangements and community programs, EduHubAfric facilitates and 
      harnesses efforts towards the shaping of 'science of learning' informed interventions that are 
      geared to foster 'learning how to learn' among students within basic and tertiary level 
      institutions in the continent. 
    `,
    icon: BoltIcon,
  },
  {
    name: 'Learning and Teaching Resources',
    description: `
      Through  bespoke consultancies and corporate social responsibility programs,  EduHubAfric 
      facilitates, creates and supports unique collaborations for mobilization and development of 
      curriculum and resources for supporting teaching, learning and assessment of STEM disciplines 
      at primary, secondary and tertiary level.
    `,
    icon: BoltIcon,
  },
  {
    name: 'EduTalkAfric Radio',
    description: `
      As Africa's Number One Online Education Radio, EduTalkAfric Radio is a unique space & platform 
      for interactive, evidence-based  conversations and cross-pollination of ideas among African 
      educators and education stakeholders within individual African countries and across the 
      continent.
    `,
    icon: BoltIcon,
  },
  {
    name: 'Postgraduate Exchange Program',
    description: `
      EduHubAfric facilitates, creates and supports opportunities for collaborations and sharing of 
      ideas and knowledge among Africa's STEM ED postgraduates  
    `,
    icon: BoltIcon,
  },
  {
    name: 'Organizational Incubation & Support',
    description: `
      EduHubAfric provides research and evidence-informed support in fund-raising, program 
      development, implementation and MERL to newly formed or young and African-led entities in the 
      STEM-ED sector.
    `,
    icon: BoltIcon,
  },
  {
    name: 'Women- ED Program',
    description: `
      EduHubAfric facilitates, creates, supports & contributes to unique collaborations & 
      interventions (regional and or global) aimed at reducing gender  gap in  leadership within 
      institutions of learning at all levels of learning (special focus on STEM- ED) in the African 
      continent. .
    `,
    icon: BoltIcon,
  },
]

const OurProgramsPage: FC<PageProps> = () => {
  return (
    <DefaultLayout>
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <article className="prose">
            <h1>Our Programs</h1>
          </article>
        </div>
      </section>

      <section className="container mx-auto px-4 my-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature) => (
            <article key={feature.name} className="prose">
              <h3 className="font-black">{feature.name}</h3>
              <hr />
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <AppCTA />
    </DefaultLayout>
  )
}

export default OurProgramsPage
