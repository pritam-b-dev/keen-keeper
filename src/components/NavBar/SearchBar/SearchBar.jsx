"use client";
import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleSearch = (query) => {
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set("search", query);
    } else {
      params.delete("search");
    }
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };
  return (
    <label className="input flex items-center gap-2 h-8 md:h-12 w-full max-w-[150px] md:max-w-xs transition-all">
      <svg
        className="h-4 w-4 md:h-5 md:w-5 opacity-50"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2.5"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </g>
      </svg>
      <input
        className="text-xs md:text-sm grow outline-none border-none bg-transparent"
        type="search"
        required
        placeholder="Search"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </label>
  );
};

export default SearchBar;
