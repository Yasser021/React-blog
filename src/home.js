import { useState, useEffect } from "react";
import BlogList from "./blogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "This My First Blog",
      body: "Hello There I learn React js Today",
      author: "Yasser",
      id: 1,
    },
    { title: "React JS is Fun", body: "No it is not", author: "Syawal", id: 2 },
    {
      title: "Javascript is Fun",
      body: "No it is not",
      author: "Surya",
      id: 3,
    },
  ]);

  const [name, setname] = useState("Anto");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("useEffect ran");
  }, [name]);

  return (
    <div className="home">
      <div className="header">
        <h2>Home Page</h2>
        {/* <button className="button">New Blog</button> */}
      </div>
      <BlogList
        blogs={blogs}
        title={"Newest Blogs"}
        handleDelete={handleDelete}
      />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "Yasser")}
        title={"Yasser Blogs"}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Home;
