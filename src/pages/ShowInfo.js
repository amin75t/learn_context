import React, { useContext, useRef } from "react";

function ShowInfo() {
  const ShowName = useRef(null);
  const ShowInfoPage = () => {    
  };
  return (
    <div className=" h-screen flex flex-col justify-center items-center ">
      <h1 ref={ShowName}></h1>
      <button className="border border-cyan-700 px-4" onClick={ShowInfoPage()}>
        show info
      </button>
    </div>
  );
}

export default ShowInfo;
