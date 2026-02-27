import { motion } from "framer-motion";
import Input from "../components/Input";
import { Loader, Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
import { useAuthStore } from "../store/authStore";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { signup, error, isLoading } = useAuthStore();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await signup(email, password, name);
      navigate("/verify-email");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-slate-800 bg-opacity-50
       backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="p-8">
        <h2
          className="text-3xl font-bold mb-6 text-center bg-linear-to-r
        from-rose-400 to-rose-500 text-transparent bg-clip-text
        "
        >
          Create Account
        </h2>

        <form onSubmit={handleSubmit}>
          <Input
            icon={User}
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            icon={Mail}
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            icon={Lock}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
          {/* Password Strength Meter */}
          <PasswordStrengthMeter password={password} />
          <motion.button
            className="mt-5 w-full py-3 px-4 bg-linear-to-r from-rose-500 to-violet-600 text-white 
						font-bold rounded-lg shadow-lg hover:from-rose-600
						hover:to-violet-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2
						 focus:ring-offset-slate-900 transition duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
          >
            {isLoading ? (
              <Loader className=" animate-spin mx-auto" size={24} />
            ) : (
              "Sign Up"
            )}
          </motion.button>
        </form>
      </div>
      <div className="px-8 py-4 bg-slate-900 bg-opacity-50 justify-center">
        <p className="text-sm text-slate-400 text-center">
          Already have an account?
          <Link to="/login" className="text-rose-400 hover:underline ml-2">
            Signin
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default SignUpPage;
