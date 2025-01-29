import React, { useEffect } from "react";
import "./Home.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Home = () => {
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      console.log(data);
    };
    getPosts();
  }, []);

  return (
    <div className="homePage">
      <div className="postContents">
        <div className="postHeader">
          <h1>Post Title</h1>
        </div>
        <div className="postTextContainer">
          I'm studying React and I'm going to create a blog with it.
        </div>
        <div className="postFooter">
          <h3>@aaaa</h3>
          <button>Like</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
