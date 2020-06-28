import React from "react";

const Message = props => {
  const { message } = props;
  return (
    <div className="card mb-3 mt-3 shadow-sm">
      <div className="card-body">
        <div className="card-text">{message}</div>
      </div>
    </div>
  );
};

export default Message;