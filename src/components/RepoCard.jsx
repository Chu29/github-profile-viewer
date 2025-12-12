import { useQuery } from "@tanstack/react-query";
import { getUserRepos } from "../service/fetch.service";
import { useParams } from "react-router";

const RepoCard = () => {
  const { query } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["repos", query],
    queryFn: () => getUserRepos(query),
  });

  if (isLoading)
    return (
      <div className="mt-40 flex flex-col gap-8 items-center">
        <p className="h-10 w-10 rounded-full border-4 border-t-transparent border-blue-500 animate-spin"></p>
        <p>Loading...</p>
      </div>
    );
  console.log(data);

  return <div>RepoCard</div>;
};

export default RepoCard;
