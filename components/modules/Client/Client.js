import React from "react";

const Client = ({ username, body, profile }) => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <img src={profile} alt="" />
        <div className="">
          <h3 className="text-2xl font-bold">{username}</h3>
          <h4>Profession</h4>
        </div>
      </div>
      <p className="text-justify mt-4">{body}</p>
    </div>
  );
};

export default Client;
