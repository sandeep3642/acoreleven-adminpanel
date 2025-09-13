import { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/Layout";

const Login = lazy(() => import("./pages/Login"));
const Billing = lazy(() => import("./pages/Billing"));
import "./App.css";
import { UserProvider } from "./context/UserContext";
import TokenHandler from "./utility/TokenHandler";
import Loader from "./utility/Loader";
import PublicRoute from "./utility/PublicRoute";
import PrivateRoute from "./utility/PrivateRoute";
import ECSControlDashboard from "./pages/ECS/ECSControlDashboard";
import AWBShipmentForm from "./pages/AWBShipment/AWBShipmentForm";

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
            <Route
              path=""
              element={<ECSControlDashboard />}
            />
            {/* Public Route */}
            <Route path="/login" element={<Login />} />
            <Route element={<PublicRoute />}></Route>

            {/* Private Routes */}
            <Route element={<PrivateRoute />}>
              <Route element={<Layout />}>
                <Route path="billing" element={<Billing />} />
                <Route path="aWBShipment" element={<AWBShipmentForm />} />
                {/* AWBShipmentForm */}
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </UserProvider>
  );
}

export default App;
