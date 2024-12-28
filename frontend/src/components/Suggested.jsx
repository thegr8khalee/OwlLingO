import { useFriendStore } from "../store/useFriendStore"
import { useEffect } from "react";
import { SendRequestButton } from "./Buttons";
import { useTranslation } from "react-i18next";

const Suggested = () => {
  const { t } = useTranslation();
  const {suggest, suggested, sendRequest} = useFriendStore()

  useEffect(() => {
    suggest();
  }, [suggest]);

  console.log({suggested})

  if(suggested.length == 0) {
    return (
      <h3 className="text-center text-lg font-semibold">{t("no_suggested_users")}</h3>
    )
  }

  return (
    <div className="overflow-y-auto w-full py-3">
      <h3 className="text-center text-lg font-semibold">{t("suggested_users")}</h3>
        {suggested.map((user) => (
          <div
            key=""
            onClick=""
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
              {t("nativeLanguage")}: {user.nativeLang} {t("languageToLearn")}: {user.langToLearn}
              </div>
            </div>
            <SendRequestButton userId={user._id} sendRequest={sendRequest} />
          </div>
        ))}
      </div>
  )
}

export default Suggested