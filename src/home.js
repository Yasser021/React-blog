const Home = () => {
  const handleClick = () => {
    console.log("Hello, There!");
  };
  return (
    <div className="home">
      <div className="header">
        <h2>Home Page</h2>
        <button onClick={handleClick} className="button">
          See more !
        </button>
      </div>
    </div>
  );
};

export default Home;
