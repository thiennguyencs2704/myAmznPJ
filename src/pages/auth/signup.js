import Link from "next/link";
import Image from "next/image";
import { auth } from "../../../firebase";
import { useState } from "react";
import { useRouter } from "next/router";
import HeadLayout from "../../components/Layout/HeadLayout";
import { realtimeDB } from "../../../firebase";
import classNames from "classnames";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const createProfileUser = async (userUid, email) => {
    realtimeDB.ref("userprofiles/" + userUid).set({
      email: email,
      uid: userUid,
      cart: 0,
    });
  };

  const handlerSignup = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        createProfileUser(authUser.user.uid, authUser.user.email);
        if (authUser) {
          router.push("/");
        }
      })
      .catch((err) => setError(err.message));
  };

  return (
    <HeadLayout title="Amazon | Sign-Up">
      <div className="z-10 flex flex-col items-center min-h-screen pt-3 bg-white">
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

        <div className="flex flex-col h-full p-5 pt-2 mt-10 mb-5 border border-gray-300 w-80">
          <p className="mb-3 text-2xl font-semibold sm:text-3xl sm:mt-2">
            Create account
          </p>

          <form
            onSubmit={handlerSignup}
            className="flex flex-col text-xs font-medium "
          >
            <div className="flex flex-col space-y-2">
              <label htmlFor="mobile-email">Mobile number or email</label>
              <input
                className={classNames("input", { "border-red-600": error })}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />

              <label htmlFor="password">Password</label>
              <input
                className={classNames("input", { "border-red-600": error })}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <div>
                <p className="-mt-2 italic font-normal">
                  Passwords must be at least 6 characters
                </p>
              </div>

              {/* <label htmlFor="confirm-password">Re-enter Password</label>
              <input
                className={classNames("input", {"border-red-600": error})}
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              /> */}
            </div>

            <div className="mt-3">
              <small className="text-xs text-red-600">{error}</small>
              <button className="flex items-center justify-center text-[13px] button span">
                Create your Amazon account
              </button>
            </div>
          </form>

          <div className="text-xs">
            <div className="flex flex-col pb-4 mt-5 border-b">
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
                    <a className="text-sm font-semibold text-blue-600">
                      {" "}
                      Sign-In
                    </a>
                  </Link>
                </p>
                <p>
                  Buying for work? {/* <Link href=""> */}
                  <p className="text-blue-600">
                    Create a free business account
                  </p>
                  {/* </Link> */}
                </p>
              </div>
            </div>
          </div>
        </div>

        <footer className="relative flex flex-col items-center w-full pb-10 mt-auto text-xs border-t border-gray-100">
          <div className="absolute top-0 w-full h-full bg-gradient-to-b from-gray-100 to-white" />

          <div className="z-10 flex flex-col justify-center w-1/2 max-w-xs mt-8 space-y-1 text-blue-700 sm:flex-row sm:space-y-0 sm:space-x-3">
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

export default SignUp;
