import React, { useEffect, useState } from "react";
import "./CreatePost.css";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";

const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const createPost = async () => {
    await addDoc(collection(db, "posts"), {
      title: title,
      content: content,
      author: {
        name: auth.currentUser.displayName,
        uid: auth.currentUser.uid,
      },
    });

    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="createPostPage">
      <div className="createPostContainer">
        <h1>Create Post</h1>
        <div className="createPostForm">
          <div>TITLE</div>
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="createPostForm">
          <div>CONTENT</div>
          <textarea
            placeholder="Content"
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button className="postButton" onClick={createPost}>
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
