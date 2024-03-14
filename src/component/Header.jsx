import { IconMapPin, IconUserCircle } from '@tabler/icons-react';
import Logo from "../assets/orenge.png";

const Header = ({ username, campus, setIsSidebar, setShowModal }) => {
  return <header>
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-3">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <a href="/" className="flex items-center">
          <img src={Logo} className="mr-6 sm:h-7" alt="Flowbite Logo" />
        </a>
        <div className="flex items-center lg:order-2">
          <button href="#" className="text-gray-800 font-normal hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5  focus:outline-none flex items-center gap-1" onClick={() => setShowModal(true)}> <IconMapPin color='#aeaeae' size='30' />  {campus}</button>

          <button href="#" className="text-gray-800 font-normal hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 rounded-lg text-sm px-2 mx-2 lg:px-5 py-2 lg:py-2.5 mr-2  focus:outline-none flex items-center gap-1" onClick={() => setIsSidebar(true)}> <IconUserCircle color='#aeaeae' size='30' />   {username.split(' ')[0]}</button>

          <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-2" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </button>
        </div>

        <div className="hidden items-center w-1 flex-grow lg:flex lg:w-auto lg:order-1 mx-2" id="mobile-menu-2">
          <form className="w-full ">
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-3 h-3 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="search" id="default-search" className="block w-full py-1.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-2 focus:shadow-orange-900 focus:outline-0" placeholder="Search Events..." required />
            </div>
          </form>
        </div>
      </div>
    </nav>
  </header>
}

export default Header;