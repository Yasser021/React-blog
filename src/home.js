import { useState, useEffect } from "react";
import BlogList from "./blogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
      });
  });

  return (
    <div className="home">
      <div className="header">
        <h2>Home Page</h2>
        {/* <button className="button">New Blog</button> */}
      </div>

      {blogs && (
        <BlogList
          blogs={blogs}
          title={"Newest Blogs"}
          handleDelete={handleDelete}
        />
      )}
      {blogs && <BlogList
        blogs={blogs.filter((blog) => blog.author === "Yasser")}
        title={"Yasser Blogs"}
        handleDelete={handleDelete}
      />}
    </div>
  );
};

export default Home;
