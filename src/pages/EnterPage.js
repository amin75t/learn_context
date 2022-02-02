import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Usecontext } from "../contexts/UserProvider";

const EnterPage = () => {
  const usr = useRef(null);
  const pasword = useRef(null);
  const [state, setState] = useState(false);
  const showinfo = () => {};
  const { user, setUser, pws, setPws } = Usecontext();

  // ==========handlers=============
  const clickHandler = () => {
    if (usr.current.value < 3) {
      alert(" فیلد ها رو پر کن دوست عزیز");
      return;
    } else if (pasword.current.value < 2) {
      alert("  میگم درست پر کن فیلد رو دوست نا عزیز");
      return;
    } else {
      // console.log(typeof(setuser));
      setUser("amin");
      setPws("amin");
      setState(true);
      console.log(`${state}`);
    }
  };
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center ">
        <h1>sign-up</h1>
        <input
          className="border border-red-600 rounded-2xl p-2 pl-4 m-2"
          placeholder="username"
          ref={usr}
        />
        <input
          type="password"
          className="border border-red-600 rounded-2xl p-2 pl-4 m-4 text-"
          placeholder="pws"
          ref={pasword}
        />
        <button
          onClick={clickHandler}
          className="border border-red-600 rounded-full px-4"
        >
          ثبت
        </button>

        {state ? (
          <Link
            className="mt-4 px-4  border border-red-500 rounded-full hover:bg-slate-600 hover:text-cyan-100"
            to="/info"
          >
            info
          </Link>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default EnterPage;
