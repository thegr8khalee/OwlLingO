import { UserRoundPlus } from "lucide-react";
import { useFriendStore } from "../store/useFriendStore";
import { Loader } from "lucide-react";

const Suggested = () => {

  const {searchResult, sendRequest, isSearching} = useFriendStore()

  if (isSearching) {
    return (
      <div className="justify-items-center">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }

  if (searchResult.length == 0) {
    return (
        <h3 className="text-center text-lg font-semibold">No Search Result</h3>
    )
  }

  console.log({searchResult})
  return (
    <div className="overflow-y-auto w-full py-3">
      <h3 className="text-center text-lg font-semibold">Search Result</h3>
        {searchResult.map((user) => (
          <div
            key={null}
            onClick={null}
            className={`
              w-full p-3 flex items-center gap-3
              hover:bg-base-300 transition-colors
              "}
            `}
          >
            <div className="relative  mx-0">
              <img
                src={user.profilePic || "/avatar.png"}
                alt={user.name}
                className="size-15 object-cover rounded-full"
              />
            </div>
            <div className="block text-left min-w-0">
              <div className="font-medium truncate">{user.fullName}</div>
              <div className="text-sm text-zinc-400">
                Native Language: {user.nativeLang} Language to Learn: {user.langToLearn}
              </div>
            </div>
            <button className="btn btn-primary ml-auto"
            onClick={() => sendRequest(user._id)}
            >
              <UserRoundPlus/>
            </button>
          </div>
        ))}
      </div>
  )
}

export default Suggested