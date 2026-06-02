import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Nav from './components/nav.jsx'
import Home from './pages/Home.jsx'
import BookDetails from './pages/BookDetails.jsx'
import ListedBooks from './pages/ListedBooks.jsx'
import PagesToRead from './pages/PagesToRead.jsx'

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-base-100 font-work-sans">
      <Nav />
      <main className="min-h-[calc(100vh-100px)] pt-4">
        {children}
      </main>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout><Home /></MainLayout>,
  },
  {
    path: '/book/:id',
    element: <MainLayout><BookDetails /></MainLayout>,
  },
  {
    path: '/listed-books',
    element: <MainLayout><ListedBooks /></MainLayout>,
  },
  {
    path: '/pages-to-read',
    element: <MainLayout><PagesToRead /></MainLayout>,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
