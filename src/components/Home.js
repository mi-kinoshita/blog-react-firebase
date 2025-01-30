import React, { useEffect } from "react";
import "./Home.css";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase";

const Home = () => {
  const [postList, setPostList] = React.useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    window.location.href = "/"; // Refresh the page
  };

  return (
    <div className="homePage">
      {postList.map((post) => {
        return (
          <div className="postContents" key={post.id}>
            <div className="postHeader">
              <h1>{post.title}</h1>
            </div>
            <div className="postTextContainer">{post.content}</div>
            <div className="postFooter">
              <h3>{post.author.name}</h3>
              {post.author.uid === auth.currentUser?.uid && (
                <button onClick={() => handleDelete(post.id)}>Delete</button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
