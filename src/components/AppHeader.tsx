import React, { FC, useState } from "react"
import { Link } from "gatsby"

interface IAppHeaderProps {}

const AppHeader: FC<IAppHeaderProps> = () => {
  const [menu] = useState<{ name: string; path: string; }[]>([
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Our Programs', path: '/our-programs' },
    { name: 'FAQs', path: '/faq' },
    { name: 'Contact Us', path: '/contact-us' },
  ])
  return (
    <header className="shadow">
      <nav className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <article className="prose">
            <Link to="/" className="flex items-center no-underline">
              <span className="self-center font-black whitespace-nowrap">
                EduHubAfric
              </span>
            </Link>
          </article>

          <button 
            data-collapse-toggle="navbar-default" 
            type="button" 
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" 
            aria-controls="navbar-default" 
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg 
              className="w-6 h-6" 
              aria-hidden="true" 
              fill="currentColor" 
              viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                fill-rule="evenodd" 
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" 
                clip-rule="evenodd"
              />
            </svg>
          </button>
          
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <article className="prose">
              <ul className="flex flex-col md:flex-row md:space-x-4 list-none">
                {
                  menu.map((menuItem, index) => (
                    <li key={index}>
                      <Link 
                        to={menuItem.path} 
                        className="block" 
                      >
                        {menuItem.name}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </article>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default AppHeader