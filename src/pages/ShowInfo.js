import React, { useRef } from "react";
import { Usecontext } from "../contexts/UserProvider";

const ShowInfo = () => {
  const ShowName = useRef(null);
  const { user, pws } = Usecontext();
  const ShowInfoPage = () => {};

  return (
    <div className=" h-screen flex flex-col justify-center items-center text-gray-700 border ">
      <div className="p-4 border border-emerald-400">
        <h1>username:{user}</h1>
        <h1>pasword:{pws}</h1>
      </div>
    </div>
  );
};

export default ShowInfo;
