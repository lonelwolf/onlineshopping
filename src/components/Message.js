import React from "react";

const Message = ({ msg, bgColor, tcolor }) => {
  let styles = {
    color: tcolor,
    backgroundColor: bgColor,
  };

  return (
    <div className={`p-2 m-2 text-center ${styles}`}>
      {/* <p>{msg}</p> */}
      <p dangerouslySetInnerHTML={{ __html: msg }} />
    </div>
  );
};

export default Message;
