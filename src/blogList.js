const BlogList = ({ blogs, title,  }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Writen by {blog.author}</p>
          <div className="blog-body">
          <p>{blog.body}</p>
          {/* <button className="delete-btn" onClick={() => handleDelete(blog.id)}>Delete Blog</button> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
