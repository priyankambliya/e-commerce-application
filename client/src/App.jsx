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

const queryClient = new QueryClient()

function App() {

  return (
    <>
      <ToastContainer />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signup />} />
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
