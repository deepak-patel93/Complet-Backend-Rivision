import React from "react";
import { useState,useEffect} from "react";
import axios from "axios";
function feed() {
  const [feeds, setFeeds] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:3000/get/posts')
    .then((res)=>{
        setFeeds(res.data.data);
    })
  },[])
  return (
    <section className="feed">
        <h1 style={{ textAlign: "center" }}>Feeds</h1>
      {feeds.map((feed) => (
        <div className="feed-item" key={feed.id}>
          <img src={feed.image} alt="Feed"  className="feed-image"/>
          <p>{feed.caption}</p>
        </div>
      ))}
    </section>
  );
}

export default feed;
