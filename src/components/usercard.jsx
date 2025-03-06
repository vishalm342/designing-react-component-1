// eslint-disable-next-line no-unused-vars
import React from "react";

const UserCard = () => {
  // Static user details
  const profilePhoto = "public/itachi.jpg"; // Shortened URL
  const name = "Itachi Uchiha";
  const email = "akatsuki@mail.com";
  const phone = "89345XXXXX";
  const address = "21B, Uchiha Street, Konoha, Hidden Leaf Village";

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-xl p-4 text-center">
      <img
        src={profilePhoto}
        alt="Profile"
        className="w-24 h-24 rounded-full mx-auto"
      />
      <h2 className="text-xl font-semibold mt-3">{name}</h2>
      <p className="text-gray-600">{email}</p>
      <p className="text-gray-600">{phone}</p>
      <p className="text-gray-600">{address}</p>
    </div>
  );
};

export default UserCard;
