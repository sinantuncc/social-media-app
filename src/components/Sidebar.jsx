import React from "react";
import john from "../img/john.jpg";
import Profile from "./Profile";

const Sidebar = () => {
  const user = [
    {
      username: "john_dou",
      fullName: "John Dou",
      picture: john,
    },
  ];

  const users = [
    {
      username: "john_dou",
      fullName: "John Dou",
      picture: john,
    },
    {
      username: "john_dou",
      fullName: "John Dou",
      picture: john,
    },
    {
      username: "john_dou",
      fullName: "John Dou",
      picture: john,
    },
    {
      username: "john_dou",
      fullName: "John Dou",
      picture: john,
    },
  ];

  return (
    <aside className="p-6">
      <Profile user={user} />

      <div className="m-3 flex flex-col">
        <p className="my-5">Suggested for you</p>
        <div className>
          <ul className="flex flex-col gap-y-4">
            {users.map((item) => (
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <img
                    src={item.picture}
                    alt="img"
                    className="shrink-0 w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium">{item.fullName}</p>
                    <p className="text-sm font-medium text-slate-500">
                      {item.username}
                    </p>
                  </div>
                </div>

                <button type="button" className="text-sm hover:text-sky-800">
                  Follow
                </button>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
