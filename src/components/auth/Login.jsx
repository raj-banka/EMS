import React from "react";
import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [ password, setPassword] = useState("");

    const submitHandler = (e)=>{
        e.preventDefault();
        alert(`Email : ${email} \n password : ${password}`);
        setPassword("");
        setEmail("");   
    }

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="border-2 border-emerald-600 rounded-2xl p-20">
        <form className="flex flex-col items-center justify-center">
          <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            required
            className="text-white outline-none bg-transparent border-2 rounded-full border-emerald-600 text-xl px-5 py-3 placeholder:text-gray-400"
          />
          <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            required
            className="text-white outline-none bg-transparent border-2 rounded-full border-emerald-600 text-xl mt-2 px-5 py-3 placeholder:text-gray-400"
          />
          <button 
          onClick={(e) => submitHandler(e)}
          className=" mt-2 text-black outline-none bg-emerald-700  rounded-full text-xl px-5 py-3">
            LogIn
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
