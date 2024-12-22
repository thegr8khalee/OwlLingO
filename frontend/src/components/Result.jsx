import { MessageSquare, UserRoundPlus } from "lucide-react";
import { useFriendStore } from "../store/useFriendStore";
import { Loader } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useChatStore } from "../store/useChatStore";



const Suggested = () => {

  const {searchResult, sendRequest, isSearching, myFreinds, loadFriends} = useFriendStore()
  const {setSelectedUser} = useChatStore()

  const navigate = useNavigate()

  useEffect(() => {
    loadFriends();
  }, [loadFriends]);

  console.log({myFreinds})

  const isFriend = (usr) => {
    if (Array.isArray(myFreinds.freinds) && myFreinds.freinds.includes(usr)) {
      return true;
    }
    return false;
  };

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
            
            {/* TODO */}
            {isFriend(user._id) ? (
            <button
            className="btn btn-primary ml-auto"
            onClick={() => {navigate("/"); setSelectedUser(user);}}
            >
            <MessageSquare />
            </button>
            ) : (
            <button
            className="btn btn-primary ml-auto"
            onClick={() => sendRequest(user._id)}
            >
            <UserRoundPlus />
            </button>
            )}

          </div>
        ))}
      </div>
  )
}

export default Suggested