import React from "react";
import postIMg from "../img/post1.jpg";
import Profile from "./Profile";
import { BiLike } from "react-icons/bi";
import { FaComment } from "react-icons/fa";

const StoryFeed = () => {
  const posts = [
    {
      sharedBy: "john_dou",
      postImage: postIMg,
      postText:
        "Yellow tulips are known for their vibrant and striking appearance, adding a touch of cheerfulness to any garden or floral arrangement.",
      likes: 0,
      comments: 0,
      shareDate: new Date().toLocaleDateString,
    },
    {
      sharedBy: "john_dou",
      postImage: postIMg,
      postText:
        "Yellow tulips are known for their vibrant and striking appearance, adding a touch of cheerfulness to any garden or floral arrangement.",
      likes: 0,
      comments: 0,
      shareDate: new Date().toLocaleDateString,
    },
    {
      sharedBy: "john_dou",
      postImage: postIMg,
      postText:
        "Yellow tulips are known for their vibrant and striking appearance, adding a touch of cheerfulness to any garden or floral arrangement.",
      likes: 0,
      comments: 0,
      shareDate: new Date().toLocaleDateString,
    },
  ];

  return (
    <div className="col-span-2 bg-gray-50 text-center">
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <section className="border border-gray-400 rounded p-3">
            <div className="flex justify-between align-middle border-b p-3">
              <Profile />
              <button className="text-2xl">...</button>
            </div>

            <div className="p-4">
              <img src={post.postImage} alt="img" className="rounded-lg" />
              <p className=" text-left text-sm my-2 p-1"> {post.postText} </p>
            </div>

            <div className="flex gap-3 px-4 text-2xl">
              <button>
                <BiLike />
              </button>
              <button>
                <FaComment />
              </button>
            </div>

            <div>
                
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default StoryFeed;
