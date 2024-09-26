import React from 'react'
import '../App.css'
import logo from '../assets/books.png'
import profile from '../assets/profile.png'
import dashboard from '../assets/dashboard.png'
import allBooks from '../assets/allBooks.png'
import add from '../assets/add.png'
import borrowed from '../assets/borrow.png'
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faGrip } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const Dashboard = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const user = queryParams.get("user") || localStorage.getItem('user');
  const [showContent, setshowContent] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalChange = ()=> {
    setIsModalOpen(!isModalOpen);
  }

  if (user) {
    localStorage.setItem('user', user);
  }

  useEffect(() => {
    setshowContent(false);
    setTimeout(() => {
      setshowContent(true);
    }, 300);
  }, [location.pathname])

  return (
    <>
      <div className="dashborad flex h-[100vh]">
        <div className="left-side flex flex-col gap-8 w-[20%] bg-slate-200 p-10">
          <div className="logo flex items-center gap-2">
            <img className='w-8' src={logo} alt="" />
            <span className='text-xl font-bold'>librarian.io</span>
          </div>

          <ul className=' my-6 flex flex-col gap-6'>
            <li>
              <NavLink
                to="/dashboard/add-books"
                className={({ isActive }) => `p-2 flex gap-2 justify-start items-center ${isActive ? 'active-link' : 'inActive'}`}
              >
                <span className=''><FontAwesomeIcon icon={faPlus} /></span>
                <span>Add Books</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to={`/dashboard/?user=${user}`}
                className={({ isActive }) => `p-2 flex gap-2 justify-start items-center ${isActive ? 'active-link' : 'inActive'}`}
                end
              >
                <FontAwesomeIcon icon={faGrip} />
                <span>Dashboard</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard/books"
                className={({ isActive }) => `p-2 flex gap-2 justify-start items-center ${isActive ? 'active-link' : 'inActive'}`}
              >
                {/* <img className='w-6' src={allBooks} alt="Books" /> */}
                <FontAwesomeIcon icon={faBook} />
                <span>Books</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard/borrowed-books"
                className={({ isActive }) => `p-1 py-2 flex gap-1 justify-start items-center ${isActive ? 'active-link' : 'inActive'}`}
              >
                <img className='w-6 active' src={borrowed} alt="Borrowed Books" />
                <span>Borrowed Books</span>
              </NavLink>
            </li>
          </ul>

          <div onClick={handleModalChange} className="user hover:cursor-pointer relative top-14 flex items-center gap-2 pt-2">
            <img className='w-8' src={profile} alt="Profile" />
            <span className='text-lg font-semibold'>{user}</span>
          </div>
          {isModalOpen && (
              <div className='w-[200px] absolute top-[70%] left-[12%] z-10  bg-white border border-blue-500 shadow-lg shadow-gray-500 rounded-md'>
                <div className="profile px-4 py-2 text-blue-600 flex gap-2 items-center border-b-2 hover:bg-blue-100 hover:cursor-pointer border-gray-300 rounded-md">
                  <FontAwesomeIcon icon={faUser} />
                  <span>Your Profile</span>
                </div>
                <div className="logout px-4 py-2 text-red-500 flex gap-2 items-center hover:bg-blue-100 hover:cursor-pointer rounded-md">
                  <FontAwesomeIcon icon={faRightFromBracket} />
                  <span>Logout</span>
                </div>
              </div>
          )}
          <div className="seting relative top-12 flex items-center gap-2 px-1">
          <FontAwesomeIcon icon={faGear} />
            <span className='text-lg font-semibold'>Setting</span>
          </div>
        </div>

        <div className={`main w-[55%] h-[100%] overflow-auto my-scroll-container justify-center items-center ${showContent ? 'show' : ''}`}>
          <Outlet />
        </div>

        <div className="right-side w-[25%] p-3 pt-12">
          <div className="flex gap-10 items-center text-lg font-bold py-4">
            <h1>Book circulation history</h1>
            <span className='text-sm text-blue-500'>See all</span>
          </div>
          <div className="book-info flex items-center text-sm gap-8 font-semibold py-2">
            <span>Book name <div className='text-[12px] font-normal'>B1-1294778</div></span>
            <span>17-sept-2024</span>
            <span className='text-green-500'>Returned</span>
          </div>
          <div className="book-info flex items-center text-sm gap-8 font-semibold py-2">
            <span>Book name <div className='text-[12px] font-normal'>B1-1294778</div></span>
            <span>17-sept-2024</span>
            <span className='text-green-500'>Returned</span>
          </div>
          <div className="book-info flex items-center text-sm gap-8 font-semibold py-2">
            <span>Book name <div className='text-[12px] font-normal'>B1-1294778</div></span>
            <span>17-sept-2024</span>
            <span className='text-green-500'>Returned</span>
          </div>
          <div className="book-info flex items-center text-sm gap-8 font-semibold py-2">
            <span>Book name <div className='text-[12px] font-normal'>B1-1294778</div></span>
            <span>17-sept-2024</span>
            <span className='text-green-500'>Returned</span>
          </div>
          <div className="book-info flex items-center text-sm gap-8 font-semibold py-2">
            <span>Book name <div className='text-[12px] font-normal'>B1-1294778</div></span>
            <span>17-sept-2024</span>
            <span className='text-green-500'>Returned</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
