import { UserRoundPlus } from "lucide-react";
import { useFriendStore } from "../store/useFriendStore"
import { useEffect } from "react";

const Suggested = () => {

  const {suggest, suggested, sendRequest} = useFriendStore()

  useEffect(() => {
    suggest();
  }, [suggest]);

  console.log({suggested})

  if(suggested.length == 0) {
    return (
      <h3 className="text-center text-lg font-semibold"> No Suggested Users</h3>
    )
  }

  return (
    <div className="overflow-y-auto w-full py-3">
      <h3 className="text-center text-lg font-semibold">Suggested Users</h3>
        {suggested.map((user) => (
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