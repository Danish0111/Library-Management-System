import React from 'react';
import ReactDOM from 'react-dom/client';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Signup from './Components/Signup.jsx';
import Login from './Components/Login.jsx';
import ForgetPassword from './Components/ForgetPassword.jsx';
import Otp from './Components/Otp.jsx';
import EmailVerification from './Components/EmailVerification.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard.jsx';
import ResetPasswordEmail from './Components/ResetPasswordEmail.jsx';
import AddBooks from './Components/AddBooks.jsx';
import Books from './Components/Books.jsx';
import BorrowedBooks from './Components/BorrowedBooks.jsx';
import UserDashboard from './Components/UserDashboard.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Login />,
//   },
//   {
//     path: "/signup",
//     element: <Signup />,
//   },
//   {
//     path: "/forget-password",
//     element: <ForgetPassword />,
//   },
//   {
//     path: "/otp",
//     element: <Otp />,
//   },
//   {
//     path: "/email-verification",
//     element: <EmailVerification />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router}> */}
    <Router>
      <Routes>
        {/* <App /> */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/email-verification" element={<EmailVerification />} />
          <Route path="/dashboard" element={<Dashboard />} >
            <Route path="" element={<UserDashboard />} />
            <Route path="add-books" element={<AddBooks />} />
            <Route path="books" element={<Books />} />
            <Route path="borrowed-books" element={<BorrowedBooks />} />
          </Route>
        <Route path="/reset-password-email" element={<ResetPasswordEmail />} />
      </Routes>
    </Router>

    {/* </RouterProvider> */}
  </React.StrictMode>,
);
