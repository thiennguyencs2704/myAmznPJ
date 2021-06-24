import Link from "next/link";
import Image from "next/image";
import { auth } from "../../firebase";
import { useState } from "react";
import { useRouter } from "next/router";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

      <div className="flex flex-col border border-gray-300 p-5 z-20">
        <p>Create account</p>
        <form onSubmit={handlerSignup} className="flex flex-col">
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
          <span className="span">
            <button className="button">Continue</button>
          </span>
        </form>

        <div>
          <div className="border-b">
            <p>By creating an account, you agree to Amazon's</p>
            <div className="">
              <p>
                <Link href="">
                  <a className="text-blue-600">Conditions of Use </a>
                </Link>
                and
                <Link href="">
                  <a className="text-blue-600"> Privacy Notice.</a>
                </Link>
              </p>
            </div>
          </div>

          <div>
            <div>
              <p>
                Already have an account?
                <Link href="/auth/signin">
                  <a className="text-blue-600"> Sign-In</a>
                </Link>
              </p>
              <p>
                Buying for work?{" "}
                <Link href="">
                  <a className="text-blue-600">
                    Create a free business account
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
