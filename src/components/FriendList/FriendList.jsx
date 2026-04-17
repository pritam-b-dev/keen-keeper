"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FadeLoader } from "react-spinners";

const FriendList = ({ friends }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex flex-col items-center justify-center min-h-75">
          {" "}
          <FadeLoader color="#10b981" />{" "}
          <p className="mt-4 text-gray-500 font-medium">Searching</p>{" "}
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 bg-white">
          {friends.map((friend) => (
            <Link href={`/friends/${friend.id}`} key={friend.id}>
              <div className="flex flex-col justify-center items-center border border-gray-200 rounded-lg py-10 space-y-2">
                <Image
                  src={friend.picture}
                  alt={friend.name}
                  width={50}
                  height={50}
                  className="flex justify-center items-center rounded-full"
                />
                <h2>{friend.name}</h2>
                <p>{friend.days_since_contact} days</p>
                <div>
                  {friend.tags.map((item, ind) => (
                    <div
                      key={ind}
                      className="badge badge-soft badge-success mr-2"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <span
                  className={`text-xs px-2 py-2 rounded-full ${
                    friend.status === "Overdue"
                      ? "bg-red-300 text white"
                      : friend.status === "Almost Due"
                        ? "bg-orange-300 text-white"
                        : friend.status === "On-Track"
                          ? "bg-green-900 text-white"
                          : ""
                  }
                `}
                >
                  {friend.status}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default FriendList;
