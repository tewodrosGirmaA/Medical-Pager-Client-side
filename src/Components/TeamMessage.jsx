import React from "react";
import { Message, useMessageContext } from "stream-chat-react";

const TeamMessage = () => {
  const { handleOpenThread, message } = useMessageContext();

  return (
    <Message
      message={{ ...message, user: {} }}
      // handleOpenThread={}
    />
  );
};

export default TeamMessage;
