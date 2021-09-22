import { NavLink } from 'react-router-dom';

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
      path: '/qoute',
      name: 'Quote',
    },
  ];

  const mapLinks = links.map((link) => (
    <li key={link.id}>
      <NavLink exact to={link.path}>
        {link.name}
      </NavLink>
    </li>
  ));

  return (
    <header>
      <h1>Math Magicians</h1>
      <nav>
        <ul>
          {mapLinks}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
