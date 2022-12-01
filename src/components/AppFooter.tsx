import React, { FC, useState } from "react"
import { Link } from "gatsby"

interface IAppFooterProps {}

const AppFooter: FC<IAppFooterProps> = () => {
  const [year] = useState<number>(new Date().getFullYear());

  const [menu] = useState<{ name: string; path: string; }[]>([
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Cookie Policy', path: '/cookie-policy' },
    { name: 'Terms Of Use', path: '/terms-of-use' },
    { name: 'Contact Us', path: '/contact-us' },
  ])

  return (
    <footer className="container mx-auto p-4 flex justify-between items-end border-t text-sm">
      <article className="prose text-sm">
        <p> &copy; {year}. All Rights Reserved. </p>
      </article>

      <article className="prose text-sm">
        <ul className="flex flex-wrap items-center space-x-4 list-none">
          {
            menu.map((menuItem, index) => (
              <li key={index}>
                <Link to={menuItem.path}> {menuItem.name} </Link>
              </li>
            ))
          }
        </ul>
      </article>
    </footer>
  )
}

export default AppFooter