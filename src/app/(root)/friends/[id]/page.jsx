"use client";
import {
  FaPhoneAlt,
  FaVideo,
  FaCommentDots,
  FaRegBell,
  FaArchive,
  FaTrashAlt,
} from "react-icons/fa";
import { useParams } from "next/navigation";
import friends from "@/data/friends.json";
import React from "react";
import { useHistory } from "@/context/HistoryContext";
import Image from "next/image";

const FriendsDetails = () => {
  const params = useParams();
  const selectedFriend = friends.find(
    (friend) => friend.id === parseInt(params.id),
  );
  const { addToHistory } = useHistory();

  const handleType = (type) => {
    addToHistory(selectedFriend, type);
    alert(`${type} is recorded for ${selectedFriend.name}`);
  };

  return (
    <div className="container mx-auto p-15  bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-4 space-y-4">
          <div className="rounded-xl text-center ">
            <div className="border border-gray-300 shadow-sm rounded-xl p-3 bg-white">
              <div className="flex justify-center mb-4">
                <Image
                  src={selectedFriend.picture}
                  alt={selectedFriend.name}
                  width={100}
                  height={100}
                  className="rounded-full border-2"
                />
              </div>
              <h2 className="text-xl font-bold">{selectedFriend.name}</h2>
              <div className="flex flex-col items-center justify-center gap-2 ">
                <span
                  className={`text-xs px-2 py-2 rounded-full ${
                    selectedFriend.status === "Overdue"
                      ? "bg-red-300 text white"
                      : selectedFriend.status === "Almost Due"
                        ? "bg-orange-300 text-white"
                        : selectedFriend.status === "On-Track"
                          ? "bg-green-900 text-white"
                          : ""
                  }
                `}
                >
                  {selectedFriend.status}
                </span>
                <div>
                  {selectedFriend.tags.map((item, ind) => (
                    <span
                      key={ind}
                      className="badge badge-soft badge-success text-xs mr-2"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 italic text-sm font-semibold">
                  {`"${selectedFriend.bio}"`}
                </p>
                <p className="text-sm text-gray-400">
                  Preferred: {selectedFriend.email}
                </p>
              </div>
            </div>
            <div className=" space-y-2 mt-2">
              <button className="btn btn-ghost w-full flex justify-center gap-2 capitalize border border-gray-300 rounded-md bg-white">
                {" "}
                <FaRegBell /> Snooze 2 Weeks{" "}
              </button>
              <button className="btn btn-ghost w-full flex justify-center gap-2 capitalize border border-gray-300 rounded-md bg-white">
                {" "}
                <FaArchive /> Archive{" "}
              </button>
              <button className="btn btn-ghost w-full flex justify-center gap-2 capitalize border border-gray-300 rounded-md bg-white text-red-500">
                {" "}
                <FaTrashAlt /> Delete{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="md:col-span-8 space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white border border-gray-300 rounded-xl px-6 py-7 text-center shadow-sm">
              <h3 className="text-3xl font-bold ">
                {selectedFriend.days_since_contact}
              </h3>
              <p className="text-xs text-gray-500 mt-1">Days Since Contact</p>
            </div>
            <div className="bg-white border border-gray-300 rounded-xl px-6 py-7 text-center shadow-sm">
              <h3 className="text-3xl font-bold ">{selectedFriend.goal}</h3>
              <p className="text-xs text-gray-500 mt-1">Goal (Days)</p>
            </div>
            <div className="bg-white border border-gray-300 rounded-xl px-6 py-7 text-center shadow-sm">
              <h3 className="text-3xl font-bold ">
                {new Date(selectedFriend.next_due_date).toLocaleDateString(
                  "en-US",
                  {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  },
                )}
              </h3>
              <p className="text-xs text-gray-500 mt-1">Next Due</p>
            </div>
          </div>
          <div className="bg-white border border-gray-300 rounded-xl p-6 flex justify-between ">
            <div className="space-y-3">
              <h4 className=" font-semibold">Relationship Goal</h4>
              <p className="text-sm text-gray-500 mt-1">
                Connect every{" "}
                <span className="font-bold text-black">
                  {selectedFriend.goal} days
                </span>
              </p>
            </div>
            <button className="btn btn-sm btn-ghost bg-slate-100">Edit</button>
          </div>
          <div className="bg-white border border-gray-300 rounded-xl p-6 ">
            <h4 className=" font-semibold mb-4">Quick Check-In</h4>
            <div className="grid grid-cols-3 gap-4">
              <button
                onClick={() => handleType("Call")}
                className="btn btn-ghost border rounded-lg border-gray-200 h-24 flex flex-col gap-2 bg-gray-50 hover:bg-gray-300"
              >
                <FaPhoneAlt className="text-xl" /> <span>Call</span>
              </button>
              <button
                onClick={() => handleType("Text")}
                className="btn btn-ghost border rounded-lg border-gray-200 h-24 flex flex-col gap-2 bg-gray-50 hover:bg-gray-300"
              >
                <FaCommentDots className="text-xl" /> <span>Text</span>
              </button>
              <button
                onClick={() => handleType("Video")}
                className="btn btn-ghost border rounded-lg border-gray-200 h-24 flex flex-col gap-2 bg-gray-50 hover:bg-gray-300"
              >
                <FaVideo className="text-xl" /> <span>Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsDetails;
