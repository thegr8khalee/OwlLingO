import { useEffect } from "react";
import { useFriendStore } from "../store/useFriendStore"
import { UserRequestButtons } from "./Buttons";
import { useTranslation } from "react-i18next";

const Notification = () => {
  const { t } = useTranslation();

  const {loadFriendReq, myFreindReq, acceptRequest, delRequest} = useFriendStore()

  
  useEffect(() => {
      loadFriendReq();
  }, [loadFriendReq]);
  console.log({myFreindReq})

  if(myFreindReq.length <= 0) {
    return (
        <h3 className="text-center text-lg font-semibold">{t('noFriendRequests')}</h3>
    )
  }

  return (
    <div className="overflow-y-auto w-full py-3">
      <h3 className="text-center text-lg font-semibold">{t('friendRequests')}</h3>
        {myFreindReq.map((user) => (
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
              {t('nativeLanguage')}: {user.nativeLang} {t('languageToLearn')}: {user.langToLearn}
              </div>
            </div>
            <UserRequestButtons
            user={user}
            delRequest={delRequest}
            acceptRequest={acceptRequest}
            />
          </div>
        ))}
      </div>
  )
}

export default Notification