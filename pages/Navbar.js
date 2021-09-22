import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      name: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      name: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      name: 'Quote',
    },
  ];

  const mapLinks = links.map((link) => (
    <li key={link.id} className="link">
      <NavLink exact to={link.path} activeClassName="activated">
        {link.name}
      </NavLink>
    </li>
  ));

  return (
    <header className="banner">
      <div className="pcon-6 d-block d-flex-2 justify-between align-items-center">
        <h1>Math Magicians</h1>
        <nav>
          <ul>
            {mapLinks}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
