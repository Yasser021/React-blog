import { useState, useEffect } from "react";
import BlogList from "./blogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          // console.log(res);
          if (!res.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setError(null);
          setBlogs(data);
          setIsPending(false);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  });

  return (
    <div className="home">
      <div className="header">
        <h2>Home Page</h2>
        {/* <button className="button">New Blog</button> */}
      </div>
      {error && <div>{error}</div>}
      {isPending && <div className="">Loading the Data......</div>}
      {blogs && (
        <BlogList
          blogs={blogs}
          title={"Newest Blogs"}
          // handleDelete={handleDelete}
        />
      )}
      {blogs && (
        <BlogList
          blogs={blogs.filter((blog) => blog.author === "Yasser")}
          title={"Yasser Blogs"}
          // handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default Home;
