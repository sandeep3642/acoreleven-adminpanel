// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import HeroImage from "../../assets/hero.png";
// import LogoImage from "../../assets/Logo.png";
// import Loader from "../../utility/Loader";
// // import { loginUser } from "./loginService";
// import { toast } from "react-toastify";

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("diwakar@qicapp.com");
//   const [password, setPassword] = useState("Diwakar@1991");
//   const [loading, setLoading] = useState(false);

//   return (
//     <>
//       {loading ? (
//         <Loader />
//       ) : (
//         <div className="flex min-h-screen  items-center justify-center p-4">
//           <div className="flex flex-col md:flex-row bg-white rounded-2xl border border-gray-300 w-full max-w-5xl overflow-hidden">
//             {/* Left Side - Form */}
//             <div className="w-full md:w-1/2 p-8 bg-[#e9f2f5]">
//               <h2 className="text-2xl font-semibold text-gray-800 mb-2">
//                 Login
//               </h2>
//               <p className="text-sm text-gray-600 mb-6">
//                 Enter the email and OTP to sign in
//               </p>

//               {/* Mobile Number Input */}
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm mb-1">
//                   Email
//                 </label>
//                 <div className="flex">
//                   <input
//                     type="text"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="w-[70%] flex-grow border border-gray-300 rounded-lg px-4 py-3 focus:outline-none text-black"
//                     placeholder="Enter Email"
//                   />
//                 </div>
//               </div>

//               {/* OTP Input */}
//               <div className="mb-4">
//                 <label className="block text-gray-700 text-sm mb-1">
//                   Password
//                 </label>
//                 <input
//                   type="text"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full border border-gray-300 rounded-lg px-4 text-black py-3 focus:outline-none"
//                   placeholder="Enter Password"
//                 />
//               </div>

//               {/* Login Button */}
//               <button
//                 // onClick={handleLogin}
//                 className="w-full cursor-pointer bg-[#00AFC1] text-white py-3 mt-10 rounded-xl hover:bg-[#0096a9] transition"
//               >
//                 Login
//               </button>
//             </div>

//             {/* Right Side - Image + Text */}
//             <div className="w-full md:w-1/2 bg-white p-4 flex flex-col justify-center items-center">
//               <div className="w-full">
//                 <img src={LogoImage} alt="logo" className="h-15 w-100" />
//               </div>
//               <h3 className="text-[#40A8C4] font-semibold text-2xl text-center my-4">
//                 Fast. Trusted. Hassle-Free Repairs.
//               </h3>

//               <img
//                 src={HeroImage}
//                 alt="Login Illustration"
//                 className="w-4/5 mb-4"
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Login;

import { useState } from "react";
import { User, Lock } from "lucide-react";
import HeroImage from "../../assets/hero.png";

const Login = () => {
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
    //   const response = await loginUser(email, password);

      const { details, status } = response;
      if (status && status.success === true) {
        toast.success(status?.message);
        const { token, user } = details;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/dashboard");
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="flex flex-col lg:flex-row bg-white rounded-3xl shadow-lg w-full max-w-8xl overflow-hidden">
        {/* Left Side - Hero Image and Welcome Text */}
        <div className="w-full lg:w-1/2 bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex flex-col justify-center items-center">
          {/* Welcome Text */}

          {/* Hero Image */}
          <div className="w-full max-w-md">
            <img
              src={HeroImage}
              alt="Delivery and logistics illustration"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-white">
          <div className="max-w-md mx-auto w-full">
            {/* Header */}
            <div className="mb-8">
              <div className="w-12 h-1 bg-red-500 rounded-full mb-6"></div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Login to Filing System
              </h2>
              <p className="text-gray-600 text-sm">
                Enter the User ID and Password to sign in
              </p>
            </div>

            {/* User ID Input */}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                User ID
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={userID}
                  onChange={(e) => setUserID(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-800 placeholder-gray-400"
                  placeholder=""
                />
                <User className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Password Input */}
            <div className="mb-8">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-800 placeholder-gray-400"
                  placeholder=""
                />
                <Lock className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Login Button */}
            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full bg-red-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Logging in...
                </div>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
