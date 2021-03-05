import UserIcon from './Svgs';

const Navbar = () => (
  <nav className="navbar">
    <div className="navcontainer">
      <div className="logo"><h1>Bookstore CMS</h1></div>
      <ul className="navigation">
        <li>books</li>
        <li>categories</li>
      </ul>
      <div className="userIcon">
        <div className="svgcont">
          <UserIcon classL="userSvg" />
        </div>
      </div>
    </div>
  </nav>
);
export default Navbar;
