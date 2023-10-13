import { Route, Routes, useLocation } from "react-router-dom"

import Header from "../header/Header"
import SideBar from "../SideBar"
import DefaultPage from "../header/DefaultPage.page"
import UserDetails from "./Userdetail.page"

function Home() {

    const localtion = useLocation()
    const data = localtion.state
    return (
        <>
            <Header />
            <div className="grid grid-cols-6 mx-2">
                <div className="col-start-1 h-screen fixed rounded-md bg-slate-500">
                    <SideBar />
                </div>
                <div className="col-start-2 col-span-5 m-3 overflow-hidden">
                    <Routes>
                        <Route path="/" element={<DefaultPage />} />
                        <Route path="/user-detail/:id" element={<UserDetails />} />
                    </Routes>
                </div>
            </div>
        </>

    )
}

export default Home