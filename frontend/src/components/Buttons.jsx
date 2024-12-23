import { Check, ChevronRight, CircleMinus, Handshake, UserRoundPlus, Trash2 } from "lucide-react";
import { useState } from "react";

/* eslint-disable react/prop-types */
export const CancelRequestButton = ({ userId, cancelRequest }) => {
    const [isClicked, setIsClicked] = useState(false);
  
    const handleCancelClick = () => {
      setIsClicked(true); // Disable the button and change the icon
      cancelRequest(userId); // Call the cancelRequest function
    };
  
    return (
      <button
        className="btn btn-primary ml-auto"
        onClick={handleCancelClick}
        disabled={isClicked} // Disable the button if clicked
      >
        {isClicked ? <Check /> : <CircleMinus />}
      </button>
    );
  };

  export const AcceptRequestButton = ({ userId, acceptRequest }) => {
    const [isClicked, setIsClicked] = useState(false);
  
    const handleAcceptClick = () => {
      setIsClicked(true); // Disable the button and change the icon
      acceptRequest(userId); // Call the cancelRequest function
    };
  
    return (
      <button
        className="btn btn-primary ml-auto"
        onClick={handleAcceptClick}
        disabled={isClicked} // Disable the button if clicked
      >
        {isClicked ? <ChevronRight /> : <Handshake />}
      </button>
    );
  };

  export const SendRequestButton = ({ userId, sendRequest }) => {
    const [isClicked, setIsClicked] = useState(false);
  
    const handleSendClick = () => {
      setIsClicked(true); // Disable the button and change the icon
      sendRequest(userId); // Call the cancelRequest function
    };
  
    return (
      <button
        className="btn btn-primary ml-auto"
        onClick={handleSendClick}
        disabled={isClicked} // Disable the button if clicked
      >
        {isClicked ? <ChevronRight /> : <UserRoundPlus />}
      </button>
    );
  };

  export const UserRequestButtons = ({ user, delRequest, acceptRequest }) => {
    // State to track if any button was clicked
    const [isActionTaken, setIsActionTaken] = useState(false);
  
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
              className="btn btn-primary ml-auto"
              onClick={() => handleDeleteRequest(user._id)}
            >
              <Trash2 />
            </button>
            <button
              className="btn btn-primary ml-auto"
              onClick={() => handleAcceptRequest(user._id)}
            >
              <Handshake />
            </button>
          </>
        )}
      </div>
    );
  };