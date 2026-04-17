import friends from "@/data/friends.json";
import FriendDetails from "../../../../components/FriendDetails/FriendDetails";

const FriendsDetails = async ({ params }) => {
  const { id } = await params;
  const selectedFriend = friends.find((friend) => friend.id === parseInt(id));

  return <FriendDetails selectedFriend={selectedFriend} />;
};

export default FriendsDetails;
