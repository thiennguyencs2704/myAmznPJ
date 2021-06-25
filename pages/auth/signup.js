import Link from "next/link";
import Image from "next/image";
import { auth } from "../../firebase";
import { useState } from "react";
import { useRouter } from "next/router";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();

  const handlerSignup = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        console.log(authUser);
        if (authUser) {
          router.push("/");
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

      <div className="flex flex-col border border-gray-300 p-5 pt-2 w-80 h-full">
        <p className="text-2xl sm:text-3xl sm:mt-2 font-semibold mb-3">
          Create account
        </p>

        <form
          onSubmit={handlerSignup}
          className="flex flex-col text-xs font-medium "
        >
          <div className="flex flex-col space-y-2">
            <label htmlFor="name">Your name</label>
            <input className="input" type="text" />

            <label htmlFor="mobile-email">Mobile number or email</label>
            <input
              className="input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="password">Password</label>
            <input
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div>
              <p className="font-normal -mt-2 italic">
                Passwords must be at least 6 characters
              </p>
            </div>

            <label htmlFor="confirm-password">Re-enter Password</label>
            <input
              className="input"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <span className="span mt-4 mb-5 h-7 text-center rounded-sm ">
            <button className="flex items-center justify-center button h-full">
              Create your Amazon account
            </button>
          </span>
        </form>

        <div className="text-xs">
          <div className="flex flex-col border-b pb-4">
            <p>By creating an account, you agree to Amazon's</p>
            <div className="">
              <p>
                {/* <Link href=""> */}
                <span className="text-blue-600">Conditions of Use </span>
                {/* </Link> */}
                and
                {/* <Link href=""> */}
                <span className="text-blue-600"> Privacy Notice.</span>
                {/* </Link> */}
              </p>
            </div>
          </div>

          <div className="mt-5">
            <div>
              <p>
                Already have an account?
                <Link href="/auth/signin">
                  <a className="text-blue-600 text-sm font-semibold">
                    {" "}
                    Sign-In
                  </a>
                </Link>
              </p>
              <p>
                Buying for work? {/* <Link href=""> */}
                <p className="text-blue-600">Create a free business account</p>
                {/* </Link> */}
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="relative flex flex-col items-center border-t border-gray-100 w-full text-xs mt-10 pb-10">
        <div className="absolute w-full h-full bg-gradient-to-b from-gray-100 to-white top-0" />

        <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 max-w-xs justify-center text-blue-700 w-1/2 mt-8 z-10 sm:space-x-3">
          <p className="text-center">Conditions of User</p>
          <p className="text-center">Privacy Notice</p>
          <p className="text-center">Help</p>
        </div>
        <p className="mt-3 z-50">
          © 1996-2021, Amazon.com, Inc. or its affiliates
        </p>
      </footer>
    </div>
  );
};

export default SignUp;
