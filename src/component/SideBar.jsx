import { IconUserCircle } from "@tabler/icons-react";
import { useEffect } from "react";
import { useRef } from "react";

const Sidebar = ({ setIsSidebar }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      document.addEventListener("click", handleClickOutside, false);
    }, 100);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  const handleRewards = () => {
    setIsSidebar(false);
  }

  const handleClickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      console.log("Here");
      setIsSidebar(false);
    }
  };

  return <div className="w-full h-svh absolute">
    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    <aside ref={wrapperRef} id="default-sidebar" className="fixed top-0 right-0 z-40 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0 shadow-lg ml-4" aria-label="Sidebar">
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
        <ul className="space-y-2 font-medium">
          <li className="mb-4">
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100group">
              <IconUserCircle color='#aeaeae' size='55' />
              <p className="ms-3 flex flex-col gap-0.5">
                <span className="text-sm">{localStorage.getItem('name')}</span>
                <span className="text-xs text-gray-600">{localStorage.getItem('email')}</span>
              </p>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-3 text-gray-900 rounded-lg hover:bg-gray-100 group">
              <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="notifications" fill="currentColor"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M19.29 17.29L18 16v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-1.29 1.29c-.63.63-.19 1.71.7 1.71h13.17c.9 0 1.34-1.08.71-1.71zM16 17H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zm-4 5c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2z"></path></svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Notifications</span>
              <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full">3</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-3 text-gray-900 rounded-lg hover:bg-gray-100 group">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="calendar" className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 " fill="currentColor"><g fill="none" stroke="#58595B" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"><path d="M6.5 14.5l4.438 4 6.562-8"></path><path d="M.5 7.5h22v16H.5zM.5 7.5v-5h22v5M11.5 4.5v-3M17.5 4.5v-3M5.5 4.5v-3"></path></g><path fill="none" d="M0 0h24v24H0z"></path></svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Bookings</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-3 text-gray-900 rounded-lg hover:bg-gray-100 group">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="chat" className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 " fill="currentColor"><path d="M13,11H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Zm4-4H7A1,1,0,0,0,7,9H17a1,1,0,0,0,0-2Zm2-5H5A3,3,0,0,0,2,5V15a3,3,0,0,0,3,3H16.59l3.7,3.71A1,1,0,0,0,21,22a.84.84,0,0,0,.38-.08A1,1,0,0,0,22,21V5A3,3,0,0,0,19,2Zm1,16.59-2.29-2.3A1,1,0,0,0,17,16H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z"></path></svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Help & Support</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-3 text-gray-900 rounded-lg hover:bg-gray-100 group">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="settings" className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 " fill="currentColor"><path d="M12.32 30.47a2.82 2.82 0 0 1-1.13-.23l-1.86-.77a3 3 0 0 1-1.62-3.91l.59-1.43a.33.33 0 0 0-.07-.35.33.33 0 0 0-.36-.08l-1.43.59a3 3 0 0 1-3.92-1.63l-.76-1.84a3 3 0 0 1 1.62-3.92l1.43-.59A.34.34 0 0 0 5 16a.34.34 0 0 0-.19-.32l-1.43-.58a3 3 0 0 1-1.62-3.92l.77-1.86a3 3 0 0 1 3.91-1.61l1.43.59a.33.33 0 0 0 .35-.07.33.33 0 0 0 .08-.36l-.59-1.43a3 3 0 0 1 1.63-3.92l1.84-.76a3 3 0 0 1 3.92 1.62l.59 1.43A.34.34 0 0 0 16 5a.34.34 0 0 0 .32-.19l.58-1.43a3 3 0 0 1 3.92-1.62l1.86.77a3 3 0 0 1 1.62 3.91l-.6 1.43a.33.33 0 0 0 .07.35.33.33 0 0 0 .36.08l1.43-.59a3 3 0 0 1 3.92 1.63l.76 1.84a3 3 0 0 1-1.62 3.92l-1.43.59A.34.34 0 0 0 27 16a.34.34 0 0 0 .19.32l1.43.58a3 3 0 0 1 1.62 3.92l-.77 1.86a3 3 0 0 1-3.91 1.62l-1.43-.59a.33.33 0 0 0-.35.07.33.33 0 0 0-.08.36l.59 1.43a3 3 0 0 1-1.63 3.92l-1.84.76a3 3 0 0 1-3.92-1.62l-.59-1.43A.34.34 0 0 0 16 27a.34.34 0 0 0-.32.19l-.58 1.43a3 3 0 0 1-2.78 1.85ZM8 21.67a2.35 2.35 0 0 1 2.16 3.23l-.6 1.42a1 1 0 0 0 .55 1.31l1.89.77a1 1 0 0 0 1.31-.55l.58-1.41A2.31 2.31 0 0 1 16 25a2.31 2.31 0 0 1 2.15 1.43l.59 1.42a1 1 0 0 0 1.31.54l1.85-.76a1.05 1.05 0 0 0 .54-.54 1 1 0 0 0 0-.77l-.59-1.42a2.34 2.34 0 0 1 3-3l1.42.6a1 1 0 0 0 1.31-.55l.77-1.85a1 1 0 0 0-.55-1.31l-1.41-.58a2.34 2.34 0 0 1 0-4.31l1.42-.59a1 1 0 0 0 .58-1.31l-.76-1.85a1.05 1.05 0 0 0-.54-.54 1 1 0 0 0-.77 0l-1.42.59a2.34 2.34 0 0 1-3-3.05l.6-1.42a1 1 0 0 0-.55-1.31l-1.9-.82a1 1 0 0 0-1.31.55l-.58 1.41A2.31 2.31 0 0 1 16 7a2.31 2.31 0 0 1-2.15-1.43l-.59-1.42A1 1 0 0 0 12 3.61l-1.85.76a1.05 1.05 0 0 0-.54.54 1 1 0 0 0 0 .77l.59 1.42a2.34 2.34 0 0 1-3.1 3.05l-1.42-.6a1 1 0 0 0-1.31.55L3.6 12a1 1 0 0 0 .55 1.31l1.41.58a2.34 2.34 0 0 1 0 4.31l-1.42.59a1 1 0 0 0-.54 1.31l.76 1.85a1.05 1.05 0 0 0 .54.54 1 1 0 0 0 .77 0l1.42-.59a2.32 2.32 0 0 1 .91-.23Zm8-.67a5 5 0 0 1-4.63-6.91A5 5 0 1 1 16 21Zm0-8a3.06 3.06 0 0 0-1.15.23 3 3 0 0 0-1.62 3.92 3 3 0 0 0 3.92 1.62 3 3 0 0 0 0-5.54A2.88 2.88 0 0 0 16 13Z"></path></svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Account & Settings</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-3 text-gray-900 rounded-lg hover:bg-gray-100 group" onClick={handleRewards}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="gift" className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 " fill="currentColor"><g data-name="Layer 2"><path d="M19.2 7h-.39A3 3 0 0 0 19 6a3.08 3.08 0 0 0-3.14-3A4.46 4.46 0 0 0 12 5.4 4.46 4.46 0 0 0 8.14 3 3.08 3.08 0 0 0 5 6a3 3 0 0 0 .19 1H4.8A2 2 0 0 0 3 9.2v3.6A2.08 2.08 0 0 0 4.5 15v4.37A1.75 1.75 0 0 0 6.31 21h11.38a1.75 1.75 0 0 0 1.81-1.67V15a2.08 2.08 0 0 0 1.5-2.2V9.2A2 2 0 0 0 19.2 7zM19 9.2v3.6a.56.56 0 0 1 0 .2h-6V9h6a.56.56 0 0 1 0 .2zM15.86 5A1.08 1.08 0 0 1 17 6a1.08 1.08 0 0 1-1.14 1H13.4a2.93 2.93 0 0 1 2.46-2zM7 6a1.08 1.08 0 0 1 1.14-1 2.93 2.93 0 0 1 2.45 2H8.14A1.08 1.08 0 0 1 7 6zM5 9.2A.56.56 0 0 1 5 9h6v4H5a.56.56 0 0 1 0-.2zM6.5 15H11v4H6.5zm6.5 4v-4h4.5v4z" data-name="gift"></path></g></svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Rewards</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-3 text-gray-900 rounded-lg hover:bg-gray-100 group">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="logout" className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 " fill="currentColor"><path fill="currentColor" fillRule="evenodd" d="M3 13H15V11H3V13Z" clipRule="evenodd"></path><path fill="currentColor" fillRule="evenodd" d="M5.79282 7.79291L2.29282 11.2929C1.90229 11.6834 1.90229 12.3166 2.29282 12.7071L5.79282 16.2071 7.20703 14.7929 4.41414 12 7.20703 9.20712 5.79282 7.79291zM8 4C8 3.44772 8.44772 3 9 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H9C8.44772 21 8 20.5523 8 20V17H10V19H20V5H10V7H8V4z" clipRule="evenodd"></path></svg>
              <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
            </a>
          </li>

        </ul>
      </div>
    </aside>
  </div>
}

export default Sidebar;