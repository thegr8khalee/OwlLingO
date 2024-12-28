import { Check, ChevronRight, CircleMinus, Handshake, UserRoundPlus, Trash2 } from "lucide-react";
import { useState } from "react";
import { useTranslation } from 'react-i18next';

/* eslint-disable react/prop-types */
export const CancelRequestButton = ({ userId, cancelRequest }) => {
    const { t } = useTranslation();
    const [isClicked, setIsClicked] = useState(false);
  
    const handleCancelClick = () => {
      setIsClicked(true); // Disable the button and change the icon
      cancelRequest(userId); // Call the cancelRequest function
    };
  
    return (
      <button
        className="btn btn-primary ml-auto group"
        onClick={handleCancelClick}
        disabled={isClicked} // Disable the button if clicked
      >
        {isClicked ? <Check /> : <CircleMinus />}
        <span className="hidden group-hover:flex duration-300">{t('cancelRequest')}</span>
      </button>
    );
  };

  export const AcceptRequestButton = ({ userId, acceptRequest }) => {
    const [isClicked, setIsClicked] = useState(false);
    const { t } = useTranslation();
  
    const handleAcceptClick = () => {
      setIsClicked(true); // Disable the button and change the icon
      acceptRequest(userId); // Call the cancelRequest function
    };
  
    return (
      <button
        className="btn btn-primary ml-auto group"
        onClick={handleAcceptClick}
        disabled={isClicked} // Disable the button if clicked
      >
        {isClicked ? <ChevronRight /> : <Handshake />}
        <span className="hidden group-hover:flex duration-300">{t('acceptFriend')}</span>
      </button>
    );
  };

  export const SendRequestButton = ({ userId, sendRequest }) => {
    const [isClicked, setIsClicked] = useState(false);
    const { t } = useTranslation();
  
    const handleSendClick = () => {
      setIsClicked(true); // Disable the button and change the icon
      sendRequest(userId); // Call the cancelRequest function
    };
  
    return (
      <button
        className="btn btn-primary ml-auto group"
        onClick={handleSendClick}
        disabled={isClicked} // Disable the button if clicked
      >
        {isClicked ? <ChevronRight /> : <UserRoundPlus />}
        <span className="hidden group-hover:flex duration-300">{t('sendRequest')}</span>
      </button>
    );
  };

  export const UserRequestButtons = ({ user, delRequest, acceptRequest }) => {
    // State to track if any button was clicked
    const [isActionTaken, setIsActionTaken] = useState(false);
    const { t } = useTranslation();
  
    const handleDeleteRequest = (userId) => {
      delRequest(userId); // Call delete request function
      setIsActionTaken(true); // Mark action as taken
    };
  
    const handleAcceptRequest = (userId) => {
      acceptRequest(userId); // Call accept request function
      setIsActionTaken(true); // Mark action as taken
    };
  
    return (
      <div className="flex gap-3 ml-auto">
        {isActionTaken ? (
          <button className="btn btn-disabled ml-auto">
            <Check />
          </button>
        ) : (
          <>
            <button
              className="btn btn-primary ml-auto group"
              onClick={() => handleDeleteRequest(user._id)}
            >
              <Trash2 />
              <span className="hidden group-hover:flex duration-300">{t('delete')}</span>
            </button>
            <button
              className="btn btn-primary ml-auto group"
              onClick={() => handleAcceptRequest(user._id)}
            >
              <Handshake />
              <span className="hidden group-hover:flex duration-300">{t('accept')}</span>
            </button>
          </>
        )}
      </div>
    );
  };