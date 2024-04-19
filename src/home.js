import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "This My First Blog",
      body: "Hello There I learn React js Today",
      author: "Yasser",
      id: 1,
    },
    { title: "React js is Fun", body: "No it is not", author: "Yasser", id: 2 },
    {
      title: "Javascript is Fun",
      body: "No it is not",
      author: "Yasser",
      id: 3,
    },
  ]);
  return (
    <div className="home">
      <div className="header">
        <h2>Home Page</h2>
        <button className="button">
          New Blog
        </button>
      </div>
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Writen by {blog.author}</p>
            <p>{blog.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
