import { Route, Routes } from "react-router-dom";
import AdminsigninPage from "./AdminsigninPage.page";

function MainAdminPage() {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<AdminsigninPage />} />
      </Routes>
    </>
  );
}

export default MainAdminPage;
