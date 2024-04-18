export const Nav = () => {
  return (
    <>
      <nav className="navbar ">
        <div className="nav-item nav-brand">
          <a href="index.html">Pogs's Blog</a>
        </div>

        <li className="nav-item">
          <ul className="nav-link">
            <a href="index.html">Home</a>
          </ul>
          <ul className="nav-link">
            <a href="post.html">Posts</a>
          </ul>
          <ul className="nav-link">
            <a href="#">About</a>
          </ul>
        </li>
      </nav>
    </>
  );
};

export default Nav;
