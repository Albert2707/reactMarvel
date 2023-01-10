import { useState, useEffect } from "react";
import { getCharacters } from "../../api/api";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

import axios from "axios";
import Characters from "../characters/Characters";
import Down from "../Down/Down";
const Character = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  let [limit, setLimit] = useState(20);

  const { isLoading, refetch, isRefetching, data } = useQuery(
    ["marvel"],
    () => getCharacters(limit),
    { refetchOnWindowFocus: false }
  );

  useEffect(() => {
    refetch();
  }, [limit]);

  //verify if this component has been scrolled
  window.onscroll = () => {
    setIsScrolled(
      document.documentElement.scrollHeight -
        Math.round(document.documentElement.scrollTop) ===
        document.documentElement.clientHeight
    );
    /*     setIsScrolled(
      Math.abs(
        document.documentElement.scrollHeight -
          document.documentElement.clientHeight -
          document.documentElement.scrollTop
      ) < 1
    ); */
  };
  return (
    <div className="flex items-center flex-col mx-10 md:mx-0">
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  xl:grid-cols-4   gap-5 ">
        {isLoading ? (
          <div className="flex justify-center col-span-full">
            <div className="flex gap-1">
              <span className="h-6 w-6 rounded-full bg-indigo-400 animate-[bounce_0.9s_infinite_100ms]"></span>
              <span className="h-6 w-6 rounded-full bg-indigo-400 animate-bounce "></span>
              <span className="h-6 w-6 rounded-full bg-indigo-400 animate-[bounce_1s_infinite_100ms]"></span>
            </div>
          </div>
        ) : (
          data.map((characters) => (
            <Characters marvel={characters} key={characters.id} />
          ))
        )}
      </div>
      <button
        onClick={() => {
          setLimit((limit += 20));
        }}
        className="bg-zinc-900 mt-5  p-5 rounded-xl text-lg text-white relative"
      >
        {isRefetching ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 animate-spin"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        ) : (
          "Load more characters"
        )}
      </button>
      {!isLoading && !isScrolled && (
        <div className="fixed inset-x-0 flex justify-center bottom-3">
          <Down />
        </div>
      )}
    </div>
  );
};

export default Character;
