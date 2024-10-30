// src/components/Feed.js
import React, { useState, useEffect } from "react";
import "./Feed.css";
import { FcGallery } from "react-icons/fc";
import { FaVideo } from "react-icons/fa6";
import { MdEventNote } from "react-icons/md";
import { MdOutlineArticle } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import ZAbutton from "./ZAbutton";
import { FaComment } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from the database, e.g., Firebase or mock data
    setPosts([
      {
        id: 1,
        name: "Zain ul Abedin",
        content: "Hello, LinkedIn!",
        likes: 10,
        img: "https://tse4.mm.bing.net/th?id=OIP.qQTQZauzZn9YYqNkvPNXxQHaHa&pid=Api&P=0&h=220",
        comment: "6",
        share: "25",
      },
      {
        id: 2,
        name: "Hassan Khan",
        content: "Excited to join this platform.",
        likes: 20,
        img: "https://tse4.mm.bing.net/th?id=OIP.DGGon6gD7XG8XHtzqYrzNQHaE8&pid=Api&P=0&h=220",
        comment: "4",
        share: "12",
      },
    ]);
  }, []);

  return (
    <div className="feed">
      <div className="feed__input">
        <input type="text" placeholder="Start a post" />
        <button>Post</button>{" "}
      </div>
      <div className=" bg-slate-100 ">
        <ul className="flex justify-around">
          <li className="flex">
            <FcGallery />
            <span className="ml-2">Photo</span>
          </li>
          <li className="flex">
            <span className=" mr-2">
              {" "}
              <FaVideo />
            </span>{" "}
            Video
          </li>
          <li className="flex">
            <MdEventNote />
            <span className=" mr-2">Event</span>
          </li>

          <li className="flex">
            <MdOutlineArticle /> <span className="mr-2">Whie Artical</span>{" "}
          </li>
        </ul>
      </div>

      <div className="feed__posts">
        {posts.map((post) => (
          <div key={post.id} className="feed__post">
            <ZAbutton img={post.img} name={post.name} company={post.content} />
            <p></p>
            <img className="w-96 ml-16 rounded-lg" src={post.img} alt="" />
            <div className="flex justify-around pt-4 ">
              <p >
                <AiFillLike />
                {post.likes}
              </p>
              <p>
                <FaComment />
                {post.comment}
              </p>
              <p >
                <IoIosShareAlt />
                {post.share}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feed;
