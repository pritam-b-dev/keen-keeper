import Banner from "@/components/Banner/Banner";
import friends from "@/data/friends.json";

import FriendList from "../../components/FriendList/FriendList";
import SearchBar from "../../components/NavBar/SearchBar/SearchBar";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto max-w-5xl mt-6 mb-6 ">
        <Banner />
        <div className="border-t border-gray-200 my-4"></div>
        <div className="flex justify-between px-6">
          <h1 className="font-bold text-sm md:text-2xl lg:text-3xl mb-6">
            Your Friends
          </h1>{" "}
          <Suspense fallback={null}>
            <SearchBar />
          </Suspense>
        </div>
        <Suspense fallback={null}>
          <FriendList friends={friends} />
        </Suspense>
      </div>
    </div>
  );
}
