import React from "react";

import { useSelector } from "react-redux";

export function Profile() {
  const currUser = useSelector((state) => state.user.currUser);
console.log("salam" ,currUser);
  if (!currUser) {
    return <p>Please log in to view your profile.</p>;
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Name: {currUser.name}</p>
      <p>Email: {currUser.email}</p>
      {/* Add more user details here */}
    </div>
  );
}
