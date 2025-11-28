import SearchBar from "../components/SearchBar";

export const AppBar = () => {
  return (
    <>
      <h1 className="text-3xl">GitHub Profile Viewer</h1>
      <p className="text-gray-400 text-[15px]">
        Search for any GitHub user to view their profile and repositories
      </p>
    </>
  );
};

const HomePage = () => {
  return (
    <div className="text-center text-white mt-10">
      <AppBar />
      <SearchBar />
      <img
        className=" block mx-auto mt-5 mb-5"
        src="./github-mark.svg"
        alt=""
      />
      <p className="text-gray-400 text-[15px]">
        Enter a GitHub username to get started
      </p>
    </div>
  );
};

export default HomePage;
