"use client";
import { FaPhoneAlt, FaVideo, FaCommentDots } from "react-icons/fa";
import React, { useState } from "react";
import { useHistory } from "@/context/HistoryContext";
import Image from "next/image";

const History = () => {
  const { history } = useHistory();

  const [filteredType, setFilteredType] = useState("All");
  const [sort, setSort] = useState("newest");
  const filteredTypeSelected = (
    filteredType === "All"
      ? [...history]
      : history.filter((selected) => selected.type === filteredType)
  ).sort((sortN, sortO) => {
    const dateN = new Date(sortN.date);
    const dateO = new Date(sortO.date);
    return sort === "newest" ? dateO - dateN : dateN - dateO;
  });

  return (
    <div className="container mx-auto p-10 bg-gray-50">
      <h2 className="p-4 md:p-10 font-bold text-4xl">Timeline</h2>
      <div className="pb-6 flex gap-2 md:gap-3 flex-row items-center ">
        <select
          className="select select-bordered appearance-none rounded-xl px-2 py-1 text-xs md:px-4 md:py-2 font-medium outline-none transition-all cursor-pointer shadow-sm h-8 md:h-12"
          value={filteredType}
          onChange={(e) => setFilteredType(e.target.value)}
        >
          <option value="All">Show All</option>
          <option value="Call">Call</option>
          <option value="Video">Video Call</option>
          <option value="Text">Text</option>
        </select>
        <select
          className="select select-bordered appearance-none rounded-xl px-2 py-1 text-xs md:px-4 md:py-2 font-medium outline-none transition-all cursor-pointer shadow-sm h-8 md:h-12"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="newest">Sort by Newest</option>
          <option value="oldest">Sort by Oldest</option>
        </select>
      </div>

      {filteredTypeSelected.length === 0 ? (
        <p className="bg-white rounded-lg border border-gray-200 p-15 flex justify-center items-center text-green-900 font-bold text-4xl min-h-28">
          History List is Empy!
        </p>
      ) : (
        <div>
          {filteredTypeSelected.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow p-4 flex justify-start items-center mb-5"
            >
              <div className="flex items-center gap-3">
                {item.type === "Call" ? (
                  <FaPhoneAlt className="text-xl" />
                ) : item.type === "Video" ? (
                  <FaVideo className="text-xl" />
                ) : item.type === "Text" ? (
                  <FaCommentDots className="text-xl" />
                ) : (
                  ""
                )}

                <div>
                  <span>{item.type} </span>{" "}
                  <span className="font-semibold">with {item.friendName}</span>
                  <p className="text-sm text-gray-500">
                    {new Date(item.date).toLocaleDateString("en-US", {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                    {" • "}
                    {new Date(item.date).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default History;
