import Link from "next/link";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { auth } from "../../firebase";
import { useRouter } from "next/router";
import { useState } from "react";
import HeadLayout from "../../components/Layout/HeadLayout";
import { fetchUserProfile } from "../../store/userActions";

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
          dispatch(fetchUserProfile(userAuth.user.uid));
        }
      })
      .catch((err) => alert(err.message));
  };

  return (
    <HeadLayout title="Amazon | Sign-In">
      <div className="min-h-screen bg-white flex flex-col items-center z-10 justify-between pt-3">
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

        <div className="flex flex-col border border-gray-300 p-5 w-80 pt-3 sm:h-full">
          <p className="text-2xl sm:text-3xl sm:mt-2 font-semibold mb-3">
            Sign-In
          </p>

          <form
            onSubmit={handlerSignin}
            className="flex flex-col text-xs font-medium  mb-4 sm:mb-5"
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

            <span className="span mt-3 h-7 rounded-sm">
              <button className="flex items-center justify-center button h-full">
                Sign-in
              </button>
            </span>

            {/* <Link href="/"> */}
            <p className="text-xs flex justify-end">Forgot password</p>
            {/* </Link> */}
          </form>

          <div className="flex flex-col justify-between text-xs pb-2">
            <p>
              By Continuing, you agree to Amazon's{" "}
              <span className="text-blue-700">Conditions of Use</span> and{" "}
              <span className="text-blue-700">Privacy Notice</span>{" "}
            </p>

            {/* <Link href="/"> */}
            <p className="text-blue-700 mt-3 sm:mt-5">Need help?</p>
            {/* </Link> */}
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

          <div className="mt-4 mb-5 ">
            <Link href="/auth/signup">
              <button className="bg-amazon_gray-light hover:bg-gray-400 active:bg-gray-500 border border-gray-400 w-full text-xs rounded-sm py-1 h-7 focus:outline-none">
                Create your Amazon account
              </button>
            </Link>
          </div>
        </div>

        <footer className="relative flex flex-col items-center border-t border-gray-100 w-full text-xs mt-10 pb-10">
          <div className="absolute w-full h-full bg-gradient-to-b from-gray-100 to-white top-0" />

          <div className="flex flex-col space-y-1 sm:space-y-0 sm:flex-row max-w-xs justify-center text-blue-700 w-1/2 mt-8 z-10 sm:space-x-3">
            <p className="text-center">Conditions of User</p>
            <p className="text-center">Privacy Notice</p>
            <p className="text-center">Help</p>
          </div>
          <p className="mt-3 z-50">
            © 1996-2021, Amazon.com, Inc. or its affiliates
          </p>
        </footer>
      </div>
    </HeadLayout>
  );
};

export default Signin;
