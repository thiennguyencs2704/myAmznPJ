import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { auth } from "../../../firebase";
import { useRouter } from "next/router";
import { useState } from "react";
import HeadLayout from "../../components/Layout/HeadLayout";
import { fetchUserProfile } from "../../store/userActions";
import classNames from "classnames";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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
          dispatch(fetchUserProfile(userAuth.user.uid));
        }
      })
      .catch((err) => setError(err.message));
  };

  return (
    <HeadLayout title="Amazon | Sign-In">
      <div className="z-10 flex flex-col items-center justify-between min-h-screen pt-3 bg-white">
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

        <div className="flex flex-col p-5 pt-3 border border-gray-300 w-80 sm:h-full">
          <p className="mb-3 text-2xl font-semibold sm:text-3xl sm:mt-2">
            Sign-In
          </p>

          <form
            onSubmit={handlerSignin}
            className="flex flex-col mb-4 text-xs font-medium sm:mb-5"
          >
            <div className="flex flex-col space-y-1">
              <label htmlFor="email">Email or mobile phone number</label>
              <input
                type="text"
                className={classNames("input", { "border-red-600": error })}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />

              <label htmlFor="password">Password</label>
              <input
                type="password"
                className={classNames("input", { "border-red-600": error })}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <div className="mt-2">
              <small className="text-xs text-red-600">{error}</small>

              <button className="flex items-center justify-center span button">
                Sign-in
              </button>
            </div>

            {/* <Link href="/"> */}
            <p className="flex justify-end text-xs">Forgot password</p>
            {/* </Link> */}
          </form>

          <div className="flex flex-col justify-between pb-2 text-xs">
            <p>
              By Continuing, you agree to Amazon's{" "}
              <span className="text-blue-700">Conditions of Use</span> and{" "}
              <span className="text-blue-700">Privacy Notice</span>{" "}
            </p>

            {/* <Link href="/"> */}
            <p className="mt-3 text-blue-700 sm:mt-5">Need help?</p>
            {/* </Link> */}
          </div>
        </div>

        <div className="mt-2 w-80">
          <div className="flex justify-center">
            <p className="flex-grow inline-block border-b border-gray-200">
              &nbsp;
            </p>
            <p className="flex-grow-0 inline-block px-2 pt-4 -mb-2 text-xs text-gray-500">
              New to Amazon?
            </p>
            <p className="flex-grow inline-block border-b border-gray-200">
              &nbsp;
            </p>
          </div>

          <div className="mt-4 mb-5 ">
            <Link href="/auth/signup">
              <button className="w-full py-1 text-xs border border-gray-400 rounded-sm bg-amazon_gray-light hover:bg-gray-400 active:bg-gray-500 h-7 focus:outline-none">
                Create your Amazon account
              </button>
            </Link>
          </div>
        </div>

        <footer className="relative flex flex-col items-center w-full pb-10 mt-10 text-xs border-t border-gray-100">
          <div className="absolute top-0 w-full h-full bg-gradient-to-b from-gray-100 to-white" />

          <div className="z-10 flex flex-col justify-center w-1/2 max-w-xs mt-8 space-y-1 text-blue-700 sm:space-y-0 sm:flex-row sm:space-x-3">
            <p className="text-center">Conditions of User</p>
            <p className="text-center">Privacy Notice</p>
            <p className="text-center">Help</p>
          </div>
          <p className="z-50 mt-3">
            © 1996-2021, Amazon.com, Inc. or its affiliates
          </p>
        </footer>
      </div>
    </HeadLayout>
  );
};

export default Signin;
