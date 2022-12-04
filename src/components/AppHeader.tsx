import React, { FC } from "react"
// import { Link } from "gatsby"

interface IAppHeaderProps { }

const AppHeader: FC<IAppHeaderProps> = () => {
  // const [menu] = useState<{ name: string; path: string; }[]>([
  //   { name: 'Home', path: '/' },
  //   { name: 'About Us', path: '/about-us' },
  //   { name: 'Our Programs', path: '/our-programs' },
  //   { name: 'FAQs', path: '/faq' },
  //   { name: 'Contact Us', path: '/contact-us' },
  // ])
  return (
    // <header className="shadow">
    //   <nav className="container mx-auto px-4">
    //     <div className="flex flex-wrap items-center justify-between">
    //       <article className="prose">
    //         <Link to="/" className="flex items-center no-underline">
    //           <span className="self-center font-black whitespace-nowrap">
    //             EduHubAfric
    //           </span>
    //         </Link>
    //       </article>

    //       <button 
    //         data-collapse-toggle="navbar-default" 
    //         type="button" 
    //         className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" 
    //         aria-controls="navbar-default" 
    //         aria-expanded="false"
    //       >
    //         <span className="sr-only">Open main menu</span>
    //         <svg 
    //           className="w-6 h-6" 
    //           aria-hidden="true" 
    //           fill="currentColor" 
    //           viewBox="0 0 20 20" 
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path 
    //             fill-rule="evenodd" 
    //             d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" 
    //             clip-rule="evenodd"
    //           />
    //         </svg>
    //       </button>

    //       <div className="hidden w-full md:block md:w-auto" id="navbar-default">
    //         <article className="prose">
    //           <ul className="flex flex-col md:flex-row md:space-x-4 list-none">
    //             {
    //               menu.map((menuItem, index) => (
    //                 <li key={index}>
    //                   <Link 
    //                     to={menuItem.path} 
    //                     className="block" 
    //                   >
    //                     {menuItem.name}
    //                   </Link>
    //                 </li>
    //               ))
    //             }
    //           </ul>
    //         </article>
    //       </div>
    //     </div>
    //   </nav>
    // </header>
    <div>
      <div className="flex flex-wrap">
        <section className="relative mx-auto">
          {/* <!-- navbar --> */}
          <nav className="flex justify-between bg-gray-900 text-white w-screen">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <a href="/" className="text-3xl font-bold font-heading">
                {/* <!-- <img className="h-9" src="logo.png" alt="logo"> --> */}
                EduHubAfric
              </a>
              {/* <!-- Nav Links --> */}
              <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li><a href="/" className="hover:text-gray-200">Home</a></li>
                <li><a href="/about-us" className="hover:text-gray-200">About Us</a></li>
                <li><a href="/our-programs" className="hover:text-gray-200">Our Programs</a></li>
                <li><a href="/our-team" className="hover:text-gray-200">Team</a></li>
                <li><a href="/contact-us" className="hover:text-gray-200">Contact Us</a></li>
              </ul>
              {/* <!-- Header Icons --> */}
              <div className="hidden xl:flex space-x-5 items-center">
                {/* <a href="/" className="hover:text-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </a> */}
                {/* <a href="/" className="flex items-center hover:text-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="flex absolute -mt-5 ml-4">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                    </span>
                  </span>
                </a> */}
                {/* <!-- Sign In / Register      --> */}
                <a href="/" className="flex items-center hover:text-gray-200">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg> */}
                  <a href="/login">
                  <button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-purple-600 rounded-lg hover:bg-purple-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                    Login
                  </button>
                  </a>
                </a>

              </div>
            </div>
            {/* <!-- Responsive navbar --> */}
            <a href="/" className="xl:hidden flex mr-6 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="flex absolute -mt-5 ml-4">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                </span>
              </span>
            </a>
            <a href="/" className="navbar-burger self-center mr-12 xl:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </a>
          </nav>

        </section>
      </div>
    </div>
  )
}

export default AppHeader
