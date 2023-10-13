import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import Signup from './components/pages/Signup.page'
import Signin from './components/pages/Signin.page'
import Home from './components/pages/Home.page'
import DefaultPage from './components/header/DefaultPage.page'
import UserDetails from './components/pages/Userdetail.page'
import MainAdminPage from './components/pages/admin/MainAdminPage.page'
import AdminsigninPage from './components/pages/admin/AdminsigninPage.page'

const queryClient = new QueryClient()

function App() {

  return (
    <>
      <ToastContainer />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/admin" element={<MainAdminPage />}>
              <Route path="/admin/signin" element={<AdminsigninPage />} />
            </Route>
            <Route path="/signin" element={<Signin />} />
            <Route path="/home" element={<Home />}>
              <Route path="/home/" element={<DefaultPage />} />
              <Route path="/home/user-detail/:id" element={<UserDetails />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools position='bottom-right' />
      </QueryClientProvider >
    </>
  )
}

export default App
