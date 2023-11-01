import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { firebaseAuth } from "../../../auth/Firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailAndPassword = async (e) => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      toast.success("Signup successful");
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  return (
    <div className="w-full h-full grid place-items-center">
      <div className=" grid place-items-center w-4/5 h-4/5">
        <div className="">Login</div>
        <Input
          id="email"
          label="Email"
          value={email}
          stateChange={setEmail}
          required
        />
        <Input
          id="password"
          label="Password"
          value={password}
          stateChange={setPassword}
          required
        />
        <button
          onClick={handleEmailAndPassword}
          className="relative
       rounded-lg
        hover:opacity-80
        transition w-full bg-white border-black text-black py-1 text-sm border-[1px] font-light "
        >
          <div className="">Signup</div>
        </button>
        <div className="flex">
          <div className="text-sm text-gray-500 mx-1">
            {" "}
            Already have an account
          </div>
          <div className="text-sm text-gray-500 mx-1 hover:underline">
            {" "}
            Login
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
