import Banner from "@/components/Banner/Banner";
import friends from "@/data/friends.json";

import FriendList from "../../components/FriendList/FriendList";

export default function Home() {
  return (
    <div className="container mx-auto mt-6 mb-6">
      <Banner />
      <div className="border-t border-gray-300 my-6"></div>
      <div className="font-bold text-2xl mb-6">Your Friends</div>
      <FriendList friends={friends} />
    </div>
  );
}
