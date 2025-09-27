import { Link, useMatch } from 'react-router-dom';

export const NavBar = () => {
  const homeMatch = useMatch({ path: '/', end: true });
  const tabsMatch = useMatch('/tabs/*');

  return (
    <nav className="navbar">
      <ul>
        <li className={homeMatch ? 'is-active' : ''}>
          <Link to="/">Home</Link>
        </li>
        <li className={tabsMatch ? 'is-active' : ''}>
          <Link to="/tabs">Tabs</Link>
        </li>
      </ul>
    </nav>
  );
};
