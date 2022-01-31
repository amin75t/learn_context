import React, { useRef } from "react";

function EnterPage() {
  const usr = useRef(null);
  const inputHandler = () => {
    console.log(usr.current.value);
  };
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center ">
        <h1>sign-up</h1>
        <input
          className="border border-red-600 rounded-2xl p-2 pl-4 m-2"
          placeholder="username"
          ref={usr}
          onChange={inputHandler}
        />
        <input
          className="border border-red-600 rounded-2xl p-2 pl-4 m-4 text-"
          placeholder="pws"
        />
        <button className="border border-red-600 rounded-full px-4">
          Button
        </button>
      </div>
    </>
  );
}

export default EnterPage;
