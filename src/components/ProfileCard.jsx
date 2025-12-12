import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getUserInfo } from "../service/fetch.service";
import { format } from "date-fns";
import { FaCalendar, FaLocationDot } from "react-icons/fa6";

const ProfileCard = () => {
  const { query } = useParams();
  const { data, isLoading, status } = useQuery({
    queryKey: ["userdata", query],
    queryFn: () => getUserInfo(query),
  });

  if (status === "error") {
    return <div>User not found</div>;
  }

  if (isLoading)
    return (
      <div className="mt-40 flex flex-col gap-8 items-center">
        <p className="h-10 w-10 rounded-full border-4 border-t-transparent border-blue-500 animate-spin"></p>
        <p>Loading...</p>
      </div>
    );

  const {
    avatar_url,
    bio,
    created_at,
    followers,
    following,
    location,
    login,
    public_repos,
    html_url,
    name,
  } = data;

  return (
    <div className="text-white flex flex-col items-center max-w-[450px] w-full p-5 bg-[#1d2937] rounded-2xl border border-gray-500 gap-5">
      <img
        className="border-3 border-gray-500 rounded-full h-48 w-48"
        src={avatar_url}
        alt=""
      />
      <div className="text-center flex flex-col gap-10 w-full">
        <div className=" ">
          <div className="mb-10">
            <p className="text-3xl font-bold">{name}</p>
            <p className="text-gray-400">@{login}</p>
          </div>
          <p className="text-gray-300">{bio}</p>
        </div>

        <div className="flex justify-around py-5 px-10 bg-[#121929] gap-10 rounded-2xl w-full">
          <p className="flex flex-col font-semibold">
            {public_repos}{" "}
            <span className="text-gray-500 text-[15px]">Repos</span>
          </p>
          <p className="flex flex-col border-r-2 border-l-2 px-2 border-r-gray-500 border-l-gray-500 font-semibold">
            {followers}{" "}
            <span className="text-gray-500 text-[15px]">Followers</span>
          </p>
          <p className="flex flex-col font-semibold">
            {following}{" "}
            <span className="text-gray-500 text-[15px]">Following</span>
          </p>
        </div>
        <div className=" text-left flex flex-col gap-5 w-full">
          <p className="flex items-center gap-2">
            {location === null ? (
              ""
            ) : (
              <>
                <FaLocationDot />
                <span className="text-gray-400 text-[15px] font-bold">
                  {location}
                </span>
              </>
            )}
          </p>
          <p className="flex items-center gap-2">
            <FaCalendar />
            <span className="text-gray-400 text-[15px] font-bold">
              Joined {format(new Date(created_at), "MMM yyyy ")}
            </span>
          </p>
        </div>
        <a
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#121929] py-5 rounded-2xl border border-gray-500 cursor-pointer"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
