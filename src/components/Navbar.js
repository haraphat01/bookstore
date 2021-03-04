import UserIcon from './Svgs';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo"><h1>Bookstore CMS</h1></div>
    <ul className="navigation">
      <li>books</li>
      <li>categories</li>
    </ul>
    <div className="userIcon">
      <UserIcon classL="userSvg" />
    </div>
  </nav>
);
export default Navbar;
