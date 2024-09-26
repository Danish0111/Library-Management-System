import React from 'react'
import books from '../assets/book.png'
import borrowed from '../assets/borrowed.png'
import returned from '../assets/return.png'
import overdue from '../assets/warning.png'
import Table from 'react-bootstrap/Table';

const UserDashboard = () => {
  // Example data for overdue books
  const overdueBooks = [
    { id: 134567, student:"student name", title: "The Great Gatsby", overdue: 2, return: "2024-09-15" },
    { id: 298765, student:"student name", title: "To Kill a Mockingbird", overdue: 2, return: "2024-08-10" },
    { id: 324536, student:"student name", title: "1984", overdue: 1, return: "2024-07-01" },
    { id: 234536, student:"student name", title: "1900", overdue: 3, return: "2024-07-01" },
  ];

  return (
    <>
      <h1 className='text-3xl font-bold p-10 px-6 '>Dashboard</h1>
      
      {/* Info Section */}
      <div className="info flex justify-center">
        <ul className='w-[95%] flex justify-center items-center bg-slate-200 gap-10 p-4'>
          <li className='flex gap-2'>
            <img className='w-12' src={books} alt="Books" />
            <span>Total Books <div className='text-lg font-bold'>0</div></span>
          </li>
          <li className='flex gap-2'>
            <img className='w-12' src={borrowed} alt="Borrowed" />
            <span>Borrowed <div className='text-lg font-bold'>0</div></span>
          </li>
          <li className='flex gap-2'>
            <img className='w-12' src={returned} alt="Returned" />
            <span>Returned <div className='text-lg font-bold'>0</div></span>
          </li>
          <li className='flex gap-2'>
            <img className='w-12' src={overdue} alt="Overdue" />
            <span>Overdue <div className='text-lg font-bold'>{overdueBooks.length}</div></span>
          </li>
        </ul>
      </div>

      <div className="overdue p-14 pl-6 pr-0">
        <h2 className='text-2xl'>Overdue Books</h2>

        <div className="header mt-6 text-sm table-margin">
          <Table striped bordered hover className='table-full-width table-cell-padding'>
            <thead className='table-header-padding border-b-2'>
              <tr>
                <th>ID</th>
                <th>Student</th>
                <th>Book Title</th>
                <th>Overdue</th>
                <th>Return Date</th>
              </tr>
            </thead>
            <tbody>
              {overdueBooks.length > 0 ? (
                overdueBooks.map((book, index) => (
                  <tr className='border-b hover:bg-gray-100 hover:cursor-pointer' key={book.id}>
                    <td>{book.id}</td>
                    <td>{book.student}</td>
                    <td>{book.title}</td>
                    <td>{book.overdue} days</td>
                    <td>{book.return}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center">
                    No overdue books
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default UserDashboard;
