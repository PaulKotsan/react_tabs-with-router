import { Link, useLocation } from 'react-router-dom';
import { tabs } from '../utils/tabs';

export const TabsList = () => {
  const location = useLocation();

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => {
          const isActive = location.pathname === `/tabs/${tab.id}`;

          return (
            <li
              key={tab.id}
              data-cy="Tab"
              className={isActive ? 'is-active' : ''}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
