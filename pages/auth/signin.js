import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { auth, provider } from "../../firebase";
import { useRouter } from "next/router";
import { signin } from "../../store/userSlice";
import { useState } from "react";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();
  const handlerSignin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        console.log(userAuth);
        router.push("/");
        if (userAuth) {
          dispatch(
            signin({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
            })
          );
        }
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center z-10">
      <Link href="/">
        <a className="my-2">
          <Image
            src="/amazon2.png"
            width={100}
            height={40}
            objectFit="contain"
          />
        </a>
      </Link>

      <div className="flex flex-col border border-gray-300 p-5 w-80 h-80 pt-3 sm:h-96">
        <p className="text-2xl sm:text-3xl sm:mt-2 font-semibold mb-3">
          Sign-In
        </p>

        <form
          onSubmit={handlerSignin}
          className="flex flex-col text-xs sm:text-sm font-medium  mb-4 sm:mb-5"
        >
          <div className="flex flex-col space-y-1">
            <label htmlFor="email">Email or mobile phone number</label>
            <input
              type="text"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <span className="span mt-3 h-8">
            <button className="button sm:text-sm h-full">Sign-in</button>
          </span>

          <Link href="/">
            <a className="text-xs">Forgot password</a>
          </Link>
        </form>

        <div className="flex flex-col justify-between text-xs ">
          <p>
            By Continuing, you agree to Amazon's{" "}
            <span className="text-blue-700">Conditions of Use</span> and{" "}
            <span className="text-blue-700">Privacy Notice</span>{" "}
          </p>

          <Link href="/">
            <a className="text-blue-700 mt-3 sm:mt-5">Need help?</a>
          </Link>
        </div>
      </div>

      <div className="mt-2 w-80">
        <div className="flex justify-center">
          <p className="flex-grow inline-block border-b border-gray-200">
            &nbsp;
          </p>
          <p className="flex-grow-0 inline-block pt-4 -mb-2 px-2 text-gray-500 text-xs">
            New to Amazon?
          </p>
          <p className="flex-grow inline-block border-b border-gray-200">
            &nbsp;
          </p>
        </div>

        <div className="mt-4">
          <Link href="/auth/signup">
            <button className="bg-amazon_gray-light hover:bg-gray-400 active:bg-gray-500 border border-gray-400 w-full text-xs rounded-sm py-1">
              Create your Amazon account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
