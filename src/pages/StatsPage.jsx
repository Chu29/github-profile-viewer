import ProfileCard from "../components/ProfileCard";
import RepoCard from "../components/RepoCard";
import SearchBar from "../components/SearchBar";
import { AppBar } from "./HomePage";

const StatsPage = () => {
  return (
    <div>
      <AppBar />
      <SearchBar />
      <ProfileCard />
      <RepoCard />
    </div>
  );
};

export default StatsPage;
