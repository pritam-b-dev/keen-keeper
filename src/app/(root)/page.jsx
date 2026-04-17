import Link from "next/link";
import Image from "next/image";
import Banner from "@/components/Banner/Banner";
import friends from "@/data/friends.json";

export default function Home() {
  return (
    <div className="container mx-auto mt-6 mb-6">
      <Banner />
      <div className="border-t border-gray-300 my-6"></div>
      <div className="font-bold text-2xl mb-6">Your Friends</div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
    </div>
  );
}
