import React from "react";
import { useState } from "react";
// Import logo from assets folder
import logo1 from "../../assets/logo1.png";

type LoginProps = {
  handleLogin: (email: string, password: string) => void;
};
const Login: React.FC<LoginProps> = (props) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState(false);

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        props.handleLogin(email, password);
        setPassword("");
        setEmail("");   
    }

  return (
    <div className="h-screen w-full text-white bg-[#1C1C1C]">
      <div className="absolute top-5 left-5">
        <img src={logo1} alt="logo" className="w-45 h-25" />
      </div>
      
      {/* Login form centered */}
      <div className="flex justify-center items-center h-full">
        <div className="border-2 border-emerald-600 rounded-2xl p-20">
          <form 
          onSubmit={submitHandler} 
          className="flex flex-col items-center justify-center">
            <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
              type="email"
              placeholder="Email"
              className="text-white outline-none bg-transparent border-2 rounded-full border-emerald-600 text-xl px-5 py-3 placeholder:text-gray-400"
            />
            <div className="relative">
            <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              required
              className="text-white w-full outline-none bg-transparent border-2 rounded-full border-emerald-600 text-xl mt-2 px-5 py-3 placeholder:text-gray-400"
            />
            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-3/5 -translate-y-1/2 text-sm text-emerald-300 hover:text-white cursor-pointer"
              > {showPassword ? "Hide" : "Show"}</button>
              </div>  
            <button 
            className="mt-2 text-black outline-none bg-emerald-400 hover:bg-emerald-600 cursor-pointer rounded-full text-xl px-5 py-3">
              LogIn
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
