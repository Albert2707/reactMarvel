import React from "react";

const Navbar = () => {
  return (
    <div className="min-w-7xl bg-[#222] py-2  md:py-5 flex justify-center sticky top-0 z-10">
      <div className="">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png"
          alt=""
          className="logo h-12 md:h-20"
        />
      </div>
    </div>
  );
};

export default Navbar;
