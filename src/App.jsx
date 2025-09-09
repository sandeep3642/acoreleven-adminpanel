import { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/Layout";

const Login = lazy(() => import("./pages/Login"));

import "./App.css";
import { UserProvider } from "./context/UserContext";
import TokenHandler from "./utility/TokenHandler";
import Loader from "./utility/Loader";
import PublicRoute from "./utility/PublicRoute";
import PrivateRoute from "./utility/PrivateRoute";

function App() {
  return (
    <UserProvider>
      <Router>
        <TokenHandler /> {/* 👈 Add this before <Suspense> */}
        <Suspense fallback={<Loader />}>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            theme="colored"
          />
          <Routes>
            {/* Public Route */}
            <Route element={<PublicRoute />}>
              <Route path="/" element={<Login />} />
            </Route>

            {/* Private Routes */}
            <Route element={<PrivateRoute />}>
              <Route element={<Layout />}>
                {/* <Route path="dashboard" element={<Dashboard />} />
                <Route path="customer" element={<CustomerManagement />} />
                <Route path="customer-view" element={<CustomerView />} />
                <Route path="technician" element={<Technician />} />
                <Route path="technician-view" element={<TechnicianView />} />
                <Route path="service" element={<ServiceRequestManager />} />
                <Route path="service-detail" element={<ServiceDetails />} />
                <Route
                  path="spare-part-detail"
                  element={<SparePartDetails />}
                />
                <Route
                  path="add-new-technician"
                  element={<AddTechnicianForm />}
                />
                <Route path="activityLog" element={<ActivityLog />} />
                <Route path="account" element={<AdminAccountSettings />} />
                <Route path="complaint" element={<ComplaintsTabs />} />
                <Route path="*" element={<NotFoundPage />} />
                <Route path="sub-admin" element={<SubAdmin />} />
                <Route path="subadmin-view" element={<SubAdminView />} />
                <Route path="earnings" element={<Earnings />} />
                <Route path="create-payout" element={<CreatePayoutPage />} />
                <Route
                  path="earnings-detail"
                  element={<EarningsRequestDetail />}
                /> */}
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </UserProvider>
  );
}

export default App;
