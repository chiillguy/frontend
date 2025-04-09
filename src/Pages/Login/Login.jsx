import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok && data.token && data.user) {
        // Simpan token dan user

        const user = data.user; // ✅ AMBIL user DULU
        const role = user.role; // ✅ Ambil role-nya

      console.log("Role dari backend:", role);

        localStorage.clear();
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", role);
        localStorage.setItem("user", JSON.stringify(user));

        if (role === "admin") {
          navigate("/dashboard/admin");
        } else if (role === "chef") {
          navigate("/dashboard/admin"); // pastikan route ini ada ya
        } else {
          navigate("/");
        }
      } else {
        setError("Login gagal, periksa email atau password.");
      }
    } catch (error) {
      setLoading(false);
      setError("Terjadi kesalahan, coba lagi nanti.");
      console.error("Login Error:", error);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-[#a8613b] to-[#5c2614] px-4">
      <AiOutlineHome
        onClick={() => navigate("/")}
        className="absolute top-4 left-4 text-3xl text-gray-300 hover:text-white cursor-pointer transition-transform transform hover:scale-110"
      />

      <div className="bg-[#3a1e14]/80 backdrop-blur-md text-white shadow-lg rounded-2xl p-10 w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center mb-2">LOGIN</h2>
        <p className="text-center text-gray-300 mb-6">
          Please enter your login and password!
        </p>

        {error && <p className="text-red-400 text-center mb-4">{error}</p>}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-500 bg-transparent rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-500 bg-transparent rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Password"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full border border-white text-white font-semibold py-2 rounded-lg hover:bg-white hover:text-gray-900 transition duration-200"
          >
            {loading ? "Loading..." : "LOGIN"}
          </button>
        </form>

        <p className="text-center text-gray-300 mt-4">
          Don't have an account?{" "}
          <span
            className="text-white font-semibold cursor-pointer hover:underline"
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
