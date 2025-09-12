import { useState } from "react";
import { User, Lock } from "lucide-react";
import HeroImage from "../../assets/hero.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    localStorage.setItem("token", 12345);
    navigate("/billing");
    try {
      setLoading(true);
      //   const response = await loginUser(email, password);

      const { details, status } = response;
      if (status && status.success === true) {
        toast.success(status?.message);
        const { token, user } = details;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen max-w-7xl mx-auto flex items-center justify-center p-4">
      <div className="flex flex-col lg:flex-row border-1 border-gray-100 shadow-lg w-full rounded-md max-w-9xl overflow-hidden p-4">
        {/* Left Side - Hero Image and Welcome Text */}
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center items-center border-r-2 border-gray-200 ">
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
              <h2 className="text-3xl font-bold text-gray-800 mb-2 text-left">
                Login to Filing System
              </h2>
              <p className="text-gray-600 text-sm text-left">
                Enter the User ID and Password to sign in
              </p>
            </div>

            {/* User ID Input */}
            <div className="mb-6">
              <label className="block text-gray-500 text-sm font-medium mb-2 text-left">
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
              <label className="block text-gray-500 text-sm font-medium mb-2 text-left">
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
