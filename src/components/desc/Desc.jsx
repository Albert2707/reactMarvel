import React from "react";

const Desc = ({ desc, setOpenDesc }) => {
  return (
    <div className="fixed bg-[#222]/50 inset-0">
      <div className="bg-white absolute w-[80%] md:w-[50%] 2xl:w-[20%]  h-max p-5 inset-0 flex flex-col gap-5 rounded-xl m-auto">
        <span
          onClick={() => {
            setOpenDesc(false);
          }}
          className="self-end bg-red-500 rounded-full p-2 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>

        <div className="text-center text-sm sm:text-base md:text-xl">
          {desc.length ? (
            desc
          ) : (
            <span className="flex flex-col items-center">
              <img
                className="object-cover h-36 md:h-56"
                src="https://cdn-icons-png.flaticon.com/512/8832/8832665.png"
                alt=""
              />

              <p className=" text-sm md:text-base">No description available </p>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Desc;
