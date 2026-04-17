"use client";
import { FaPhoneAlt, FaVideo, FaCommentDots } from "react-icons/fa";
import React, { useState } from "react";
import { useHistory } from "@/context/HistoryContext";
import Image from "next/image";

const History = () => {
  const { history } = useHistory();

  const [filteredType, setFilteredType] = useState("All");
  const filteredTypeSelected =
    filteredType === "All"
      ? history
      : history.filter((selected) => selected.type === filteredType);

  return (
    <div className="container mx-auto p-10 bg-gray-50">
      <h2 className="pb-10 font-bold text-4xl">Timeline</h2>
      <div className="pb-6">
        <select
          className="select select-bordered appearance-none rounded-xl px-4 py-2 font-medium outline-none transition-all cursor-pointer shadow-sm"
          value={filteredType}
          onChange={(e) => setFilteredType(e.target.value)}
        >
          <option value="All">Show All</option>
          <option value="Call">Call</option>
          <option value="Video">Video Call</option>
          <option value="Text">Text</option>
        </select>
      </div>

      {filteredTypeSelected.length === 0 ? (
        <p>no history</p>
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
