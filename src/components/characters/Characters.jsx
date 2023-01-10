import { useState } from "react";
import Desc from "../desc/Desc";

const Characters = ({ marvel }) => {
  const [openDesc, setOpenDesc] = useState(false);

  return (
    <div className=" shadow-md rounded-lg h-full overflow-hidden ">
      <div className="h-1/2 md:h-[70%]">
        <img
          className="object-cover w-full h-full"
          src={marvel.thumbnail.path + "." + marvel.thumbnail.extension}
          alt={marvel.name}
        />
      </div>
      <div className="content mt-5  md:mb-10 md:mt-2  flex flex-col gap-5 items-center">
        <span className="text-center text-xl font-semibold font-mono">
          {marvel.name}
        </span>
        <button
          onClick={() => {
            setOpenDesc(!openDesc);
          }}
          className="px-8 md:px-12 py-1  md:py-2 lg:py-3 border-4 lg:border-8 border-transparent hover:border-zinc-600 hover:bg-transparent rounded-full bg-[#444] transition text-xl text-slate-50 duration-300 hover:text-[#222]"
        >
          Desc
        </button>
      </div>
      {openDesc && <Desc setOpenDesc={setOpenDesc} desc={marvel.description} />}
    </div>
  );
};

export default Characters;
