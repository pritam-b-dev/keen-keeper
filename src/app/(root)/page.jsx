import Banner from "@/components/Banner/Banner";
import friends from "@/data/friends.json";

import FriendList from "../../components/FriendList/FriendList";
import SearchBar from "../../components/NavBar/SearchBar/SearchBar";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto max-w-5xl mt-6 mb-6 ">
        <Banner />
        <div className="border-t border-gray-200 my-4"></div>
        <div className="flex justify-between">
          <h1 className="font-bold text-2xl mb-6">Your Friends</h1>{" "}
          <SearchBar />
        </div>
        <FriendList friends={friends} />
      </div>
    </div>
  );
}
