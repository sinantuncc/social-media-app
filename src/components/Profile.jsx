import React from 'react'
import john from "../img/john.jpg"

const Profile = (props) => {
  return (
    <>
    {props.user.map((item) => (
        <div className="flex gap-3">
          <img
            src={item.picture}
            alt="img"
            className="shrink-0 w-14 h-14 rounded-full"
          />
          <div>
            <p className="text-md font-medium">{item.fullName}</p>
            <p className="text-md font-medium text-slate-500">
              {item.username}
            </p>
          </div>
        </div>
      ))}
      </>
  )
}

Profile.defaultProps = {
     user :[
        {
          username: "john_dou",
          fullName: "John Dou",
          picture: john,
        },
      ]
  };

export default Profile