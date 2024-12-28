import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const { t } = useTranslation();
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading, markLastMessageAsRead } = useChatStore();
  console.log({users})

  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] =  useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <aside
  className={`h-full border-r border-base-300 flex flex-col transition-all duration-200 ${
    selectedUser ? "w-20" : "w-30 lg:w-72"
  }`}
>
  <div className="border-b border-base-300 w-full p-5">
    <div className="flex items-center gap-2">
      <Users className="size-6" />
      {/* Conditionally hide Contacts text */}
      {!selectedUser && <span className="font-medium">{t("friends")}</span>}
    </div>

    {/* Online filter toggle - visible only if no user is selected */}
    {!selectedUser && (
      <div className="mt-3 flex items-center gap-2">
        <label className="cursor-pointer flex items-center gap-2">
          <input
            type="checkbox"
            checked={showOnlineOnly}
            onChange={(e) => setShowOnlineOnly(e.target.checked)}
            className="checkbox checkbox-sm"
          />
          <span className="text-sm">{t("online_only")}</span>
        </label>
        {/* <span className="text-xs text-zinc-500">({onlineUsers.length - 1} online)</span> */}
      </div>
    )}
  </div>

  <div className="overflow-y-auto w-full py-3">
    {filteredUsers.map((user) => (
      <button
        key={user.friend._id}
        onClick={() => {setSelectedUser(user.friend); markLastMessageAsRead(user.friend._id)}}
        className={`w-full p-3 flex items-center gap-3 hover:bg-base-300 transition-colors ${
          selectedUser?._id === user.friend._id ? "bg-base-300 ring-1 ring-base-300" : ""
        }`}
      >
        {/* Profile picture */}
        <div className="relative mx-0">
          <img
            src={user.friend.profilePic || "/avatar.png"}
            alt={user.friend.name}
            className="size-12 object-cover rounded-full"
          />
          {onlineUsers.includes(user.friend._id) && (
            <span
              className="absolute bottom-0 right-0 size-3 bg-green-500 
              rounded-full ring-2 ring-green-500"
            />
          )}
          {/** TODO */}
          {user.readMessage?.read == false && (<span
              className="absolute top-0 left-0 size-3 bg-blue-500 
              rounded-full ring-2 ring-blue-500"
            />)}
        </div>

        {/* User info - hide when a user is selected */}
        {!selectedUser && (
          <div className="block text-left min-w-0">
            <div className="font-medium truncate">{user.friend.fullName}</div>
            <div className="text-sm text-zinc-400">
              {onlineUsers.includes(user.friend._id) ? "Online" : "Offline"}
            </div>
          </div>
        )}
      </button>
    ))}

    {filteredUsers.length === 0 && (
      <div className="text-center text-zinc-500 py-4">{t("no_online_users")}</div>
    )}
  </div>
</aside>

  );
};
export default Sidebar;